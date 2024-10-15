import {
  TogglerSwitch,
  SettingsTogglerLabel,
  SettingsTogglerContainer
} from './styles'

type Props = {
  title: string
  desc: string
  value: boolean
  onChange: any
}

const SettingsToggler: React.FC<Props> = ({ title, value, desc, onChange }) => {
  return (
    <div>
      <h3>{title}</h3>

      <SettingsTogglerContainer>
        <SettingsTogglerLabel>{desc}</SettingsTogglerLabel>
        <TogglerSwitch
          value={value}
          onClick={() => onChange(!value)}
          aria-label="toggleSwitch"
        />
      </SettingsTogglerContainer>
    </div>
  )
}

export default SettingsToggler
