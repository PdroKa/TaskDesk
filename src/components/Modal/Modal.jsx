// import { useState } from 'react';
// import './style.scss'



// const ModalAdminOpen = () => {
//     return (
//         <>
//             <div className="container-form">
//                 <h1>MODAL ADMIN OPEN</h1>
//             </div>
//         </>
//     )
// }
// const ModalUserOpen = () => {
//     return (
//         <>
//             <div className="container-form">

//                 <h1>MODAL USER OPEN</h1>
//             </div>
//         </>
//     )
// }
// const ModalAdminPending = () => {
//     return (
//         <>
//             <div className="container-form">

//                 <h1>MODAL ADMIN PENDING</h1>
//             </div>
//         </>
//     )
// }
// const ModalUserPending = () => {
//     return (
//         <>
//             <div className="container-form">
//                 <h1>MODAL USER PENDING</h1>
//             </div>
//         </>
//     )
// }
// const ModalAdminFinish = () => {
//     return (
//         <>
//             <div className="container-form">
//                 <h1>MODAL ADMIN FINISH</h1>
//             </div>
//         </>
//     )
// }
// const ModalUserFinish = () => {
//     return (
//         <>
//             <div className="container-form">
//                 <h1>MODAL USER FINISH</h1>
//             </div>
//         </>
//     )
// }
// const ModalTaskDisable = () => {
//     return (
//         <>
//             <div className="container-form">
//                 <h1>MODAL USER FINISH</h1>
//             </div>
//         </>
//     )
// }


// function ModalTask({ id = 'modal', toogleModal, outSideClick, }) {
//     const [assunto, setAssunto] = useState("")
//     const [solicitante, setSolicitante] = useState("")
//     const [reponsavel, setReponsavel] = useState("")
//     const [participante, setParticipante] = useState("")
//     const [prioridade, setPrioridade] = useState('')
//     const [dataAbertura, setDataAbertura] = useState('')
//     const [detalhes, setDetalhes] = useState("")


//     const createChamado = (e) => {
//         e.preventDefault();
//         const chamado = {
//             assunto: assunto,
//             solicitante: solicitante,
//             reponsavel: reponsavel,
//             prioridade: prioridade,
//             dataAbertura: dataAbertura,
//             detalhes: detalhes,
//             status: 'aberto'

//         }
//     }
//     return (
//         <div id={id} onClick={outSideClick} className="container-form">
//             <form>
//                 <div className="form-header">
//                     <h1>Novo chamado</h1>
//                 </div>
//                 <main className="form-main">
//                     <div className="box-user-col">
//                         <label htmlFor="problem">Assunto</label>
//                         <input value={assunto} onChange={(e) => setAssunto(e.target.value)} required className='input1' type="text" id='problem' />
//                     </div>
//                     <div className="box-user-col">
//                         <label htmlFor="requester">Solicitante</label>
//                         <input value={solicitante} onChange={(e) => setSolicitante(e.target.value)} required className='input1' type="text" id='requester' />
//                     </div>
//                     <div className="box-user-row">
//                         <div className="box-user-col">
//                             <label htmlFor="responsible">Reponsavel</label>
//                             <input value={reponsavel} onChange={(e) => setReponsavel(e.target.value)} className='input1' type="text" id='responsible' />
//                         </div>
//                         <div className="box-user-col">
//                             <label htmlFor="participant">Participante</label>
//                             <input value={participante} onChange={(e) => setParticipante(e.target.value)} className='input1' type="text" id='participant' />
//                         </div>
//                     </div>

//                     <div className="box-user-col">
//                         <label htmlFor="task-priority">Prioridade</label>
//                         <div className="box-user-row">
//                             <div className='radio-container'>
//                                 <label htmlFor="low">
//                                     <input onChange={(e) => setPrioridade(e.target.value)} type="radio" name="task-priority" id="low" value='Baixo' />
//                                     <div className="custom-radio">
//                                         <span></span>
//                                     </div>
//                                     <span>Baixo</span>
//                                 </label>
//                             </div>
//                             <div className='radio-container'>
//                                 <label htmlFor="medium">
//                                     <input onChange={(e) => setPrioridade(e.target.value)} type="radio" name="task-priority" id='medium' value="Media" />
//                                     <div className="custom-radio">
//                                         <span></span>
//                                     </div>
//                                     <span>Media</span>
//                                 </label>
//                             </div>
//                             <div className='radio-container'>
//                                 <label htmlFor="high">
//                                     <input onChange={(e) => setPrioridade(e.target.value)} type="radio" name="task-priority" id='high' value="Alta" />
//                                     <div class="custom-radio">
//                                         <span></span>
//                                     </div>
//                                     <span>Alta</span>
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="box-user-col">
//                         <label htmlFor="date">Data Abertura</label>
//                         <input onChange={(e) => setDataAbertura(e.target.value)} required type="date" name="registerData" id="registerData" />
//                     </div>
//                     <div className="box-user-col">
//                         <label htmlFor="description">Detalhes da Solicitação</label>
//                         <textarea value={detalhes} onChange={(e) => setDetalhes(e.target.value)} placeholder='Descreva Detalhadamente sua Solicitação' name="description" id="description" cols="5" rows="3"></textarea>
//                     </div>
//                 </main>

//                 <div className="form-footer">
//                     <div className='form-edit'>
//                         <button id='cancel'>Cancelar</button>
//                     </div>
//                     <div className="form-submit">
//                         <button onClick={toogleModal} id='fechar'>Fechar</button>
//                         <button id='create' onClick={createChamado}>Criar</button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// }