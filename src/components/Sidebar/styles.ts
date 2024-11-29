import styled from '@emotion/styled'

export const SidebarContainer  = styled.nav`
   grid-area: 'side';
   background-color: ${props => props.theme.palette.primary.main};
   display: grid;
   grid-template-rows: max-content max-content 1fr 60px;

   > .subtitle {
      padding: 1.2rem 1.6rem;
      
      color: ${props => props.theme.palette.primary.contrastText};
      font-weight: bold;
      font-family: monospace;
      text-transform: uppercase;
   }

   > .nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      a {
         text-decoration: none;
         display: flex;
         gap: 1rem;

         .text {
            display: flex;
            align-items: center;
            gap: .8rem;
            color: ${props => props.theme.palette.text.disabled}; 
         }

         .green-border-active {
            width: 5px;
            height: 35px;
            background-color: ${props => props.theme.palette.primary.main};
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
         }
      }

      .active {
         svg {
            color: ${props => props.theme.palette.primary.light};
         }

         .text {
            color: ${props => props.theme.palette.primary.contrastText};
         }

         .green-border-active {
            background-color: ${props => props.theme.palette.primary.light};
         }
      }
   }
`