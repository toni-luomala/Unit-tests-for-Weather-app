import styled from '@emotion/styled'

const TogglerSwitch = styled.div<{ value: boolean }>`
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ value }) => (value ? '#4CAF50' : '#ccc')};
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    transform: ${({ value }) => (value ? 'translateX(20px)' : 'translateX(0)')};
  }
`

const SettingsTogglerLabel = styled.label`
  display: inline-block;
  margin-right: 10px;
  font-size: 14px;
`

const SettingsTogglerContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`

export { TogglerSwitch, SettingsTogglerLabel, SettingsTogglerContainer }
