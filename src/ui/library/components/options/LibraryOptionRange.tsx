import { useLibraryOptionsContext } from '@/modules/library/infrastructure/contexts/LibraryOptions.context'
import { Slider } from '@/ui/chadcn/components/slider'

const LibraryOptionRange = () => {
  const { libraryOptions, setLibraryOptions } = useLibraryOptionsContext()
  const { gridDensity } = libraryOptions

  const handleOnChange = (value: number[]) => {
    const [density] = value

    setLibraryOptions({ ...libraryOptions, gridDensity: density })
  }

  return (
    <div className="px-2 pb-3 pt-1">
      <Slider
        onValueChange={handleOnChange}
        defaultValue={[0.5]}
        max={1}
        step={0.1}
        value={[gridDensity]}
      />
    </div>
  )
}

export default LibraryOptionRange
