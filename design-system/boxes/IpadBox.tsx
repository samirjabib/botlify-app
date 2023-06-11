import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  isBlackBackground?: boolean
  isVisibleMobile?: boolean
}

 function IpadBox({
  children,
  isBlackBackground,
  isVisibleMobile,
}: Props) {
  return (
    <div
      className={clsx(
        'relative shadow-2xl md:left-0 md:rounded-[28px] ',
        !isVisibleMobile && 'hidden md:block'
      )}
    >
      {/* Left button */}
      <div className='absolute -left-[2px] top-8 h-6 w-2 overflow-hidden rounded-full border-r border-r-white/60 bg-[#5d5d5d] md:-left-[3px] md:h-12'>
        <div className='absolute top-[3px] h-3 w-full rounded-t-full bg-gradient-to-b from-black/70 to-transparent' />
        <div className='absolute bottom-[3px] h-3 w-full rounded-b-full bg-gradient-to-t from-black/70 to-transparent' />

        <div className='absolute right-[3px] z-10 h-full w-px bg-[#333333]' />
      </div>

      {/* Top buttons */}
      <div className='absolute left-6 -top-[2px] h-1.5 w-6 overflow-hidden rounded-full border-r border-b-white/60 bg-[#5d5d5d] md:-top-[3px] md:left-12 md:w-12'>
        <div className='absolute left-0 h-2 w-2 bg-gradient-to-r from-black/70 to-transparent md:w-3' />
        <div className='absolute right-0 h-2 w-2 bg-gradient-to-l from-black/70 to-transparent md:w-3' />
      </div>
      <div className='absolute left-14 -top-[2px] h-1.5 w-6 overflow-hidden rounded-full border-r border-b-white/60 bg-[#5d5d5d] md:-top-[3px] md:left-28 md:w-12'>
        <div className='absolute left-0 h-2 w-2 bg-gradient-to-r from-black/70 to-transparent md:w-3' />
        <div className='absolute right-0 h-2 w-2 bg-gradient-to-l from-black/70 to-transparent md:w-3' />
      </div>

      <div
        className={clsx(
          'relative z-10 overflow-hidden rounded-3xl md:rounded-[28px]',
          'border-2 bg-black md:border-4',
          isBlackBackground ? 'border-[#323232]' : 'border-[#4a4a4a]'
        )}
      >
        <div className='overflow-hidden rounded-lg border-[0.8rem] border-black bg-black md:rounded-[28px] md:border-[1.7rem]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default IpadBox