import React from "react";
import Card from "../../components/cards";
import FormGroup from "../../components/form-group";


import { withRouter } from 'react-router-dom'
import SelectMenu from "../../components/selectMenu";
import LancamentosTable from "./lancamentosTable";

class ConsultaLancamentos extends React.Component {

    render() {

        const meses = [

            { label: 'SELECIONE...', value: '' },
            { label: 'Janeiro', value: 1 },
            { label: 'Fevereiro', value: 2 },
            { label: 'Março', value: 3 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 5 },
            { label: 'Junho', value: 6 },
            { label: 'Julho', value: 7 },
            { label: 'Agosto', value: 8 },
            { label: 'Setembro', value: 9 },
            { label: 'Outubro', value: 10 },
            { label: 'Novembro', value: 11 },
            { label: 'Dezembro', value: 12 },

        ]


        const tipos = [
            { label: 'Selecione...', value: '' },
            { label: 'Despesa', value: 'DESPESA' },
            { label: 'Rceita', value: 'RECEITA' }


        ]


const lancamentos =[
{descricao:'salario',valor:5000, mes:'2', tipo:'Receita', status:'Efetivado'}


]


        return (
            <Card title="Consulta Lançamento">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">

                            <FormGroup htmlFor="inputAno" label="Ano: *">
                                <input type="text"
                                    className="form-control"
                                    id="inputAno"
                                    aria-describedby="emailHelp"
                                    placeholder="Digite o Ano" />
                            </FormGroup>

                            <FormGroup htmlFor="inputMes" label="Mês: ">
                                <selectMenu id="inputMes"


                                    className="form-control"
                                    lista={meses} />
                            </FormGroup>
                            <FormGroup htmlFor="inputTipo" label="Tipo de Lançamento: ">

                                <selectMenu id="inputTipo" className="form-control"
                                    Lista={tipos} />

                            </FormGroup>

                            <button type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>

                        </div>
                    </div>
                    
                </div>

                <br/>
                
                <div className="row" >
                    <div className="col-md-12">
                        <div className="bs-component">
                            
                            <LancamentosTable Lancamentos={lancamentos}/>
                        </div>
                    </div>

                </div>


            </Card>

        )

    }






}



export default withRouter(ConsultaLancamentos)