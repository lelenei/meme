import React from 'react'

import SvgIcon from '../components/SvgIcon'

const IconTelegram = ({ width = '20', height = '20' }: { width?: string; height?: string }) => {
  return (
    <SvgIcon width={width} height={height} viewBox="0 0 24 24">
      <path d="M20.24 5.09l-3.055 14.693a.49.49 0 01-.766.295l-4.17-3.027a.689.689 0 00-.84.023L9.095 18.96a.488.488 0 01-.775-.234l-1.605-5.162-4.148-1.548a.49.49 0 01-.005-.915l17.022-6.566c.36-.14.733.176.654.555zm-4.072 2.656L8.062 12.74a.815.815 0 00-.356.918l.876 3.08c.062.217.379.195.41-.03l.227-1.69a1.39 1.39 0 01.43-.829l6.69-6.218c.125-.116-.025-.313-.17-.224z" />
    </SvgIcon>
  )
}

export default IconTelegram
