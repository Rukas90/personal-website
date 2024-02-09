import React, { useState } from "react"
import { TagItemProps } from "src/components/props/TagItemProps"
import TagItem from "./TagItem"

interface Props {
  items: TagItemProps[]
}

const TagsRibbon = ({ items }: Props) => {
  const [selected, setSelected] = useState<number[]>([])

  const onSelect = (index: number) => {
    if (index === -1) {
      if (selected.length === items.length) {
        return setSelected([])
      }
      const indexes: number[] = []

      items.forEach((_, index) => {
        indexes.push(index)
      })
      return setSelected(indexes)
    }
    const hasSelected = selected.includes(index)

    if (hasSelected) {
      return setSelected((current) => {
        return current.filter((i) => i !== index)
      })
    }
    setSelected((current) => {
      return [...current, index]
    })
  }

  return (
    <ul className="tags-ribbon list-none flex gap-x-8 mb-12 w-full overflow-x-scroll scroller pb-4">
      <TagItem key={-1} label="All" onSelect={() => onSelect(-1)} />

      {items.map((item, index) => (
        <TagItem
          key={index}
          {...item}
          isSelected={selected.includes(index)}
          onSelect={() => onSelect(index)}
        />
      ))}
    </ul>
  )
}
export default TagsRibbon
