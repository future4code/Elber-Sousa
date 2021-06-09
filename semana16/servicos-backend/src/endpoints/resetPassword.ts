import { hash } from '../services/hashManager';
import { Request, Response } from 'express';
import connection from '../connection';
import { transporter } from '../services/transporter';

export default async function resetPassword(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const email = req.body.email as string;

    const [user] = await connection('to_do_list_users').where({ email });

    if (!user) {
      throw new Error('Email não cadastrado');
    }
    const characters = 'abcdefABCDEF12345!?/[]{}';

    let newPass = '';

    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * (characters.length - 1));
      newPass += characters[index];
    }

    const newHash = await hash(newPass);

    await connection('to_do_list_users')
      .update({ PASS: newHash })
      .where({ email });

    const info = await transporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: email,
      subject: 'Sua nova senha',
      text: `Sua nova senha é: "${newPass}"`,
      html: `<p>Sua nova senha é: "${newPass}"</p>`
    });
    res.status(200).send({message : 'Sua nova senha foi enviada para o email cadastrado'})
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
}
