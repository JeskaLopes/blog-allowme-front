import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type Option = {
  id: number | string;
  name: string;
};

type DropdownProps = {
  labelForAll?: string;
  filterTitle: string;
  options: Option[];
  onSelect: (value: number | string) => void;
  includeAllOption?: boolean;
};

function DropList({
  labelForAll = 'Todos',
  includeAllOption = true,
  filterTitle,
  options = [],
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  let allOptions = options;
  if (includeAllOption) {
    const allOption: Option = { name: labelForAll, id: 'all' };
    allOptions = [allOption, ...options];
  }

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.id);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.DropdownContainer ref={dropdownRef}>
      <S.DropdownHeader onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.name : filterTitle}
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList>
          {allOptions.map((option, index) => (
            <S.DropdownItem key={index} onClick={() => handleSelect(option)}>
              {option.name}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
}

export default DropList;
