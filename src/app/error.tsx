'use client' // Error boundaries must be Client Components
 
import { useEffect, useState } from 'react'
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [showDetails, setShowDetails] = useState(false)
  const [errorReported, setErrorReported] = useState(false)

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error captured:', {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString()
    })
  }, [error])

  const handleReportError = () => {
    // Simular envio de relatório de erro
    setErrorReported(true)
    // Aqui você poderia enviar para um serviço de monitoramento como Sentry
    console.log('Error reported to monitoring service')
  }
 
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center px-4 max-w-2xl mx-auto'>
      {/* Ícone de erro */}
      <div className="mb-6">
        <svg 
          className="w-24 h-24 text-red-500 mx-auto" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" 
          />
        </svg>
      </div>

      {/* Título principal */}
      <h1 className='text-6xl font-bold text-red-500 mb-4'>Ops!</h1>
      
      {/* Mensagem principal */}
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>
        Algo deu errado!
      </h2>
      
      {/* Descrição amigável */}
      <p className='text-gray-600 mb-8 text-lg max-w-md'>
        Parece que encontramos um problema inesperado. Não se preocupe, 
        nossa equipe já foi notificada e está trabalhando para resolver.
      </p>

      {/* Botões de ação */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={reset}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Tentar novamente
        </button>
        
        <Link 
          href="/"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Voltar ao início
        </Link>
      </div>

      {/* Botão para reportar erro */}
      {!errorReported && (
        <button
          onClick={handleReportError}
          className="text-blue-500 hover:text-blue-600 underline text-sm mb-4 transition-colors duration-200"
        >
          📧 Reportar este erro
        </button>
      )}

      {errorReported && (
        <p className="text-green-600 text-sm mb-4 flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Erro reportado com sucesso!
        </p>
      )}

      {/* Botão para mostrar detalhes técnicos */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="text-gray-500 hover:text-gray-600 text-sm underline transition-colors duration-200"
      >
        {showDetails ? '🔼 Ocultar detalhes técnicos' : '🔽 Mostrar detalhes técnicos'}
      </button>

      {/* Detalhes técnicos (visível apenas quando solicitado) */}
      {showDetails && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-left w-full max-w-lg">
          <h3 className="font-semibold text-gray-800 mb-2">Detalhes do erro:</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <div>
              <strong>Mensagem:</strong> 
              <code className="ml-2 text-red-600 bg-red-50 px-2 py-1 rounded text-xs">
                {error.message}
              </code>
            </div>
            
            {error.digest && (
              <div>
                <strong>ID do erro:</strong> 
                <code className="ml-2 text-gray-600 bg-gray-50 px-2 py-1 rounded text-xs">
                  {error.digest}
                </code>
              </div>
            )}
            
            <div>
              <strong>Horário:</strong> 
              <span className="ml-2 text-gray-600">
                {new Date().toLocaleString('pt-BR')}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Informações de contato para suporte */}
      <div className="mt-8 text-sm text-gray-500">
        <p>Precisa de ajuda? Entre em contato com nosso suporte:</p>
        <a 
          href="mailto:suporte@mottu.com" 
          className="text-blue-500 hover:text-blue-600 underline"
        >
          suporte@mottu.com
        </a>
      </div>
    </div>
  )
}