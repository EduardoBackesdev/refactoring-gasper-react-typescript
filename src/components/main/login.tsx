import '../Styles/login.css'

export function Login (){


    return(
        <div className="main-login">   
            <div className='border-login'>
                <div className='content-login'>
                    <h2 className='text-3xl'>Bem vindo ao <strong>ViewerGasper</strong> </h2>
                        <form className='formulario'>
                            <input className='rounded-lg h-11' type="text" placeholder='Login' />
                            <input className='rounded-lg h-11' type="password" placeholder='Senha'/>
                            <input type="submit" value="Entrar" className='text-white cursor-pointer rounded-md h-11 bg-red-600'/>
                        </form>
                </div>
            </div>
        </div>
    )

}