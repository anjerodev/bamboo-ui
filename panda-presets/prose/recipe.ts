import { defineRecipe } from '@pandacss/dev'

export default defineRecipe({
  className: 'prose',
  description:
    'Simple good looking articles based in Tailwind Typography & Chakra UI Prose',
  base: {
    color: 'muted.foreground',
    fontSize: 'sm',
    lineHeight: '1.7em',
    '& p': {
      marginTop: '1em',
      marginBottom: '1em',
      textWrap: 'pretty',
    },
    '& blockquote': {
      marginTop: '1.285em',
      marginBottom: '1.285em',
      paddingInline: '1.285em',
      borderInlineStartWidth: '0.25em',
    },
    '& a': {
      color: 'foreground',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationThickness: '2px',
      textDecorationColor: 'accent',
      fontWeight: '500',
      opacity: 0.7,
      _hover: { opacity: 1 },
    },
    '& strong': {
      fontWeight: '600',
    },
    '& a strong': {
      color: 'inherit',
    },
    '& h1': {
      fontSize: '2.15em',
      letterSpacing: '-0.02em',
      marginTop: '0',
      marginBottom: '0.8em',
      lineHeight: '1.2em',
      fontWeight: '800',
    },
    '& h2': {
      fontSize: '1.4em',
      letterSpacing: '-0.02em',
      marginTop: '1.6em',
      marginBottom: '0.8em',
      lineHeight: '1.4em',
      fontWeight: '700',
    },
    '& h3': {
      fontSize: '1.285em',
      letterSpacing: '-0.01em',
      marginTop: '1.5em',
      marginBottom: '0.4em',
      lineHeight: '1.5em',
      fontWeight: '600',
    },
    '& h4': {
      marginTop: '1.4em',
      marginBottom: '0.5em',
      letterSpacing: '-0.01em',
      lineHeight: '1.5em',
      fontWeight: '600',
    },
    '& img': {
      marginTop: '1.7em',
      marginBottom: '1.7em',
      borderRadius: 'lg',
      boxShadow: 'inset',
    },
    '& picture': {
      marginTop: '1.7em',
      marginBottom: '1.7em',
    },
    '& picture > img': {
      marginTop: '0',
      marginBottom: '0',
    },
    '& video': {
      marginTop: '1.7em',
      marginBottom: '1.7em',
    },
    '& kbd': {
      fontSize: '0.85em',
      borderRadius: 'xs',
      paddingTop: '0.15em',
      paddingBottom: '0.15em',
      paddingInlineEnd: '0.35em',
      paddingInlineStart: '0.35em',
      fontFamily: 'inherit',
      color: 'muted.foreground',
      '--shadow': 'border',
      boxShadow: '0 0 0 1px var(--shadow),0 1px 0 1px var(--shadow)',
    },
    '& code': {
      fontSize: '0.85em',
      letterSpacing: '-0.01em',
      borderRadius: 'sm',
      fontWeight: '500',
      fontFamily: 'mono',
      borderWidth: '1px',
      borderColor: 'border',
      px: '3.6px',
      py: '2px',
      backgroundColor: 'background',
    },
    '& pre code': {
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      borderWidth: 'inherit',
      padding: '0',
    },
    '& h2 code': {
      fontSize: '0.9em',
    },
    '& h3 code': {
      fontSize: '0.8em',
    },
    '& pre': {
      backgroundColor: 'muted',
      marginTop: '1.6em',
      marginBottom: '1.6em',
      borderRadius: 'md',
      fontSize: '0.9em',
      paddingTop: '0.65em',
      paddingBottom: '0.65em',
      paddingInlineEnd: '1em',
      paddingInlineStart: '1em',
      overflowX: 'auto',
      fontWeight: '400',
    },
    '& ol': {
      marginTop: '1em',
      marginBottom: '1em',
      paddingInlineStart: '1.5em',
    },
    '& ol[type="A"]': { listStyleType: 'upper-alpha' },
    '& ol[type="a"]': { listStyleType: 'lower-alpha' },
    '& ol[type="A" s]': { listStyleType: 'upper-alpha' },
    '& ol[type="a" s]': { listStyleType: 'lower-alpha' },
    '& ol[type="I"]': { listStyleType: 'upper-roman' },
    '& ol[type="i"]': { listStyleType: 'lower-roman' },
    '& ol[type="I" s]': { listStyleType: 'upper-roman' },
    '& ol[type="i" s]': { listStyleType: 'lower-roman' },
    '& ol[type="1"]': { listStyleType: 'decimal' },
    '& ul': {
      marginTop: '1em',
      marginBottom: '1em',
      paddingInlineStart: '1.5em',
    },
    '& li': {
      marginTop: '0.285em',
      marginBottom: '0.285em',
    },
    '& ol > li': {
      paddingInlineStart: '0.4em',
      listStyleType: 'decimal',
      '&::marker': {
        fontWeight: '400',
        color: 'muted.foreground',
      },
    },
    '& ul > li': {
      paddingInlineStart: '0.4em',
      listStyleType: 'disc',
      '&::marker': {
        color: 'muted.foreground',
      },
    },
    '& > ul > li p': {
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    '& > ul > li > p:first-of-type': {
      marginTop: '1em',
    },
    '& > ul > li > p:last-of-type': {
      marginBottom: '1em',
    },
    '& > ol > li > p:first-of-type': {
      marginTop: '1em',
    },
    '& > ol > li > p:last-of-type': {
      marginBottom: '1em',
    },
    '& ul ul, ul ol, ol ul, ol ol': {
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    '& dl': {
      marginTop: '1em',
      marginBottom: '1em',
    },
    '& dt': {
      fontWeight: '600',
      marginTop: '1em',
    },
    '& dd': {
      marginTop: '0.285em',
      paddingInlineStart: '1.5em',
    },
    '& hr': {
      marginTop: '2.25em',
      marginBottom: '2.25em',
    },
    '& :is(h1,h2,h3,h4,h5,hr) + *': {
      marginTop: '0',
    },
    '& table': {
      width: '100%',
      tableLayout: 'auto',
      textAlign: 'start',
      lineHeight: '1.5em',
      marginTop: '2em',
      marginBottom: '2em',
    },
    '& thead': {
      borderBottomWidth: '1px',
      color: 'foreground',
    },
    '& tbody tr': {
      borderBottomWidth: '1px',
      borderBottomColor: 'border',
    },
    '& thead th': {
      paddingInlineEnd: '1em',
      paddingBottom: '0.65em',
      paddingInlineStart: '1em',
      fontWeight: 'medium',
      textAlign: 'start',
    },
    '& thead th:first-of-type': {
      paddingInlineStart: '0',
    },
    '& thead th:last-of-type': {
      paddingInlineEnd: '0',
    },
    '& tbody td, tfoot td': {
      paddingTop: '0.65em',
      paddingInlineEnd: '1em',
      paddingBottom: '0.65em',
      paddingInlineStart: '1em',
    },
    '& tbody td:first-of-type, tfoot td:first-of-type': {
      paddingInlineStart: '0',
    },
    '& tbody td:last-of-type, tfoot td:last-of-type': {
      paddingInlineEnd: '0',
    },
    '& figure': {
      marginTop: '1.625em',
      marginBottom: '1.625em',
    },
    '& figure > *': {
      marginTop: '0',
      marginBottom: '0',
    },
    '& figcaption': {
      fontSize: '0.85em',
      lineHeight: '1.25em',
      marginTop: '0.85em',
      color: 'muted.foreground',
    },
    '& h1, h2, h3, h4, h5, h6': {
      color: 'foreground',
      textWrap: 'pretty',
    },
  },
  variants: {
    size: {
      md: {
        fontSize: 'md',
      },
      lg: {
        fontSize: 'lg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
