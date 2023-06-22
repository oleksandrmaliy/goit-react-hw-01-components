import PropTypes from 'prop-types';
import { randomColor } from '../Functions/getRandomHexColor';

import {
  StatSection,
  Title,
  StatList,
  StatItem,
  StatLabel,
  Value,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatSection>
      {title && <Title>{title}</Title>}

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
              <Value>{percentage}</Value>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
