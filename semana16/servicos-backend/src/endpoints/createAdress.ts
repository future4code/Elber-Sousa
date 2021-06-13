import axios from 'axios';
import { Request, Response } from 'express';
import connection from '../connection';
import { adressUser } from '../types';

export default async function createAdress(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { cep } = req.body;
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.cep === undefined) {
        throw new Error("Digite um cep válido");
    }
    const adress: adressUser = {
      cep: response.data.cep,
      logradouro: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      cidade: response.data.localidade,
      estado: response.data.uf
    };
    await connection('USER_ADRESS').insert(adress);
    res.status(201).send({ message: 'Endereço cadastrado com sucesso' });
  } catch (error) {
    res.status(400).send({ message:error.message });
  }
}
