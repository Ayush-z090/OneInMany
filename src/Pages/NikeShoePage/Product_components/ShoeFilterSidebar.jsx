import React, { useMemo, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

/**
 * Collapsible shoe filter sidebar with selectable dummy options.
 * - Uses Material UI Accordion for sections
 * - Styled with Tailwind (uses theme colors from tailwind.config.js)
 * - Accepts optional `sections` and `onChange` props; falls back to internal dummy data
 */
const DEFAULT_SECTIONS = [
  {
    id: 'gender',
    title: "Gender",
    options: [
      { id: 'men', label: "Men" },
      { id: 'women', label: "Women" },
      { id: 'kids', label: "Kids" }
    ]
  },
  {
    id: 'sport',
    title: "Sport",
    options: [
      { id: 'running', label: "Running" },
      { id: 'lifestyle', label: "Lifestyle" },
      { id: 'training', label: "Training & Gym" },
      { id: 'basketball', label: "Basketball" }
    ]
  },
  {
    id: 'price',
    title: "Price",
    options: [
      { id: 'lt_100', label: "Under $100" },
      { id: '100_150', label: "$100 - $150" },
      { id: 'gt_150', label: "Over $150" }
    ]
  }
]

export default function ShoeFilterSidebar({ sections = DEFAULT_SECTIONS, onChange }) {
  const [selected, setSelected] = useState(() => new Set())

  const selectedMap = useMemo(() => {
    const map = new Map()
    selected.forEach((key) => map.set(key, true))
    return map
  }, [selected])

  function toggleOption(optionKey) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(optionKey)) next.delete(optionKey)
      else next.add(optionKey)
      if (onChange) onChange(Array.from(next))
      return next
    })
  }

  return (
    <aside className='w-full max-w-[300px] bg-white rounded-md border border-gray-200 shadow-sm'>
      <div className='px-4 py-3 border-b border-gray-200'>
        <h2 className='text-lg font-semibold text-text-01'>Filters</h2>
        <p className='text-sm text-gray-600'>Select options to refine results</p>
      </div>

      <div>
        {sections.map((section) => (
          <Accordion key={section.id} disableGutters square>
            <AccordionSummary expandIcon={">"} aria-controls={`${section.id}-content`} id={`${section.id}-header`}>
              <span className='font-medium'>{section.title}</span>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {section.options.map((opt) => {
                  const key = `${section.id}:${opt.id}`
                  return (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          checked={!!selectedMap.get(key)}
                          onChange={() => toggleOption(key)}
                          sx={{ color: '#01e5c8', '&.Mui-checked': { color: '#01e5c8' } }}
                        />
                      }
                      label={opt.label}
                    />
                  )
                })}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>

      <div className='px-4 py-3 border-t border-gray-200'>
        <button
          type='button'
          className='w-full rounded-md py-2 text-sm font-medium text-white'
          style={{ backgroundColor: '#01e5c8' }}
          onClick={() => setSelected(new Set())}
        >
          Clear All
        </button>
      </div>
    </aside>
  )
}



