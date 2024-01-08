import { QuioscoContext } from '@/context/QuioscoProvider'
import { useContext } from 'react'

function useQuiosco() {
  return useContext(QuioscoContext)
}

export default useQuiosco