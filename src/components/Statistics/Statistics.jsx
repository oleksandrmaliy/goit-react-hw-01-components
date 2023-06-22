import PropTypes from 'prop-types';
import { randomColor } from '../Functions/getRandomHexColor';

import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatValue,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatItem
              key={id}
              style={{
                backgroundColor: `${randomColor()}`,
              }}
            >
              <StatLabel>{label}</StatLabel>
              <StatValue>{percentage}</StatValue>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
