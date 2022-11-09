import styled from 'styled-components'

const WrapCollapseIcon = styled.div`
  width: 24px;
  height: 24px;

  display: block;
  align-items: center;

  position: relative;

  input#menu {
    display: none;
  }

  .icon {
    width: 34px;
    height: auto;
    padding: 0;
    display: block;
    cursor: pointer;
  }

  .icon .menu,
  .icon .menu::before,
  .icon .menu::after {
    background: ${({ theme }) => theme.colors.primaryColor};
    content: '';
    height: 3px;
    display: block;
    position: absolute;
    transition: ease 0.3s, top ease 0.3s 0.3s, transform ease 0.3s;
  }

  .icon .menu::before {
    width: 24px;
  }

  .icon .menu {
    width: 24px;
    position: absolute;
    top: 10px;
  }

  .icon .menu::after {
    width: 24px;
  }

  .icon:hover .menu,
  .icon:hover .menu::before,
  .icon:hover .menu::after {
    background: ${({ theme }) => theme.colors.textMain};
  }

  .icon .menu::before {
    top: -8px;
  }

  .icon .menu::after {
    top: 8px;
  }

  #menu:checked + .icon .menu {
    background: transparent;
  }

  #menu:checked + .icon .menu::before {
    width: 21px;
    transform: rotate(45deg);
  }

  #menu:checked + .icon .menu::after {
    width: 21px;
    transform: rotate(-45deg);
  }

  #menu:checked + .icon .menu::before,
  #menu:checked + .icon .menu::after {
    top: 0;
    transition: top ease 0.3s, transform ease 0.3s 0.3s;
  }
`

export default function MenuCollapseIcon({ className, showMenu, toggleMenu }) {
  return (
    <WrapCollapseIcon className={className}>
      <input type="checkbox" id="menu" checked={showMenu} onChange={toggleMenu} />
      <label htmlFor="menu" className="icon">
        <div className="menu" />
      </label>
    </WrapCollapseIcon>
  )
}
MenuCollapseIcon.defaultProps = {
  className: '',
}
