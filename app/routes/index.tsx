import {Combobox} from '@headlessui/react';
import {useState} from 'react';


const people = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
]

export default function Index() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
      query === ''
          ? people
          : people.filter((person) => {
            return person.toLowerCase().includes(query.toLowerCase())
          })
  return (
      <>
    <div className="text-amber-900">
        This is it
    </div>
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              onChange={(event) => setQuery(event.target.value)} />
          <Combobox.Options>
            {filteredPeople.map((person) => (
                <Combobox.Option
                    className="text-amber-500"
                    key={person} value={person}>
                  {person}
                </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
      </>
);
}
