import HeatMap from '@uiw/react-heat-map'

// TODO: este array(SESSION_HISTORY) lo recuperaras de fetch a una bd o a localStorage

const HabitTable = ({ array }) => {
  return (
    <HeatMap
      value={array}
      width={710}
      style={{ color: '#fffff' }}
      startDate={new Date('2023/01/01')}
    />
  )
}
export default HabitTable
