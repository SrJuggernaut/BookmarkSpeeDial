import { Arrow, Content, Portal, Root, Trigger, type PopperArrowProps, type TooltipContentProps, type PortalProps as TooltipPortalProps, type TooltipProps as TooltipRootProps, type TooltipTriggerProps } from '@radix-ui/react-tooltip'
import { type FunctionComponent, type ReactNode, type RefAttributes } from 'react'

interface TooltipProps {
  children: ReactNode
  content: ReactNode
  tooltipRootProps?: TooltipRootProps
  tooltipTriggerProps?: TooltipTriggerProps & RefAttributes<HTMLButtonElement>
  tooltipPortalProps?: TooltipPortalProps
  tooltipContentProps?: TooltipContentProps
  arrow?: true
  tooltipArrowProps?: PopperArrowProps
}

const Tooltip: FunctionComponent<TooltipProps> = ({ arrow, children, content, tooltipRootProps, tooltipTriggerProps, tooltipPortalProps, tooltipContentProps, tooltipArrowProps }) => {
  return (
    <Root {...tooltipRootProps}>
      <Trigger {...tooltipTriggerProps} asChild={tooltipTriggerProps?.asChild ?? true}>{children}</Trigger>
      <Portal {...tooltipPortalProps} >
        <Content {...tooltipContentProps} className="bg-gray-800 text-gray-50 border-border border-[1px] border-solid p-1 rounded-md">
          {content}
          {arrow && <Arrow {...tooltipArrowProps} className="fill-border" />}
        </Content>
      </Portal>
    </Root>
  )
}

export default Tooltip
