import { Button } from '@/components/ui/button'

import { ExternalLinkIcon, ShareIcon } from '@/components/react/icons'

export const DefaultButton = () => <Button>Click me</Button>

export const PrimaryButton = () => <Button variant="primary">Log in</Button>

export const SecondaryButton = () => <Button variant="secondary">Cancel</Button>

export const GhostButton = () => <Button variant="ghost">Booo!</Button>

export const DangerButton = () => (
  <Button variant="danger">Remove account</Button>
)

export const LargeButton = () => <Button size="lg">Click me</Button>

export const PendingButton = () => <Button isPending>Loading...</Button>

export const LeadingIconButton = () => (
  <Button leadingIcon={<ShareIcon />}>Share</Button>
)

export const TrailingIconButton = () => (
  <Button trailingIcon={<ExternalLinkIcon />}>Open link</Button>
)

export const IconButton = () => (
  <Button size="icon">
    <ShareIcon size={16} />
  </Button>
)
