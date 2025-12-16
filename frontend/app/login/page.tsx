'use client'; // Necesario para cuando agregues los hooks (useState, onSubmit)

import Link from 'next/link';

const LoginPage = () => {
  
  

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
        
        {/* Encabezado del Formulario */}
        <div className="bg-slate-900 p-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-wider">TOMERU!</h1>
          <p className="text-slate-400 mt-2 text-sm uppercase tracking-widest">Acceso de Usuario</p>
        </div>

        {/* Cuerpo del Formulario */}
        <div className="p-8">
          <form className="space-y-6">
            
            {/* Input Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Correo Electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="ejemplo@correo.com"
              />
            </div>

            {/* Input Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Contraseña
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            {/* Botón de Submit */}
            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              INGRESAR
            </button>
          </form>

          {/* Pie de página / Registro */}
          <div className="mt-6 text-center text-sm text-slate-600">
            ¿Aún no tienes cuenta?{' '}
            <Link href="/register" className="font-semibold text-slate-900 hover:underline">
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginPage;
