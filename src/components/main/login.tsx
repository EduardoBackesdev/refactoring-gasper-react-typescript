import '../Styles/login.css'

export function Login (){


    return(
        <div className="main-login">
            
            <div className='border-login'>
                <h2>Bem vindo ao ViewerGasper</h2>

                <form className='formulario'>
                    <input className='rounded-lg h-9' type="text" placeholder='Login' />
                    <input className='rounded-lg h-9' type="password" placeholder='Senha'/>
                </form>

            </div>
        </div>
    )

}