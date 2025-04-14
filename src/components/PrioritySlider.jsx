import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';;

export const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <PriorityHighIcon color="success" />,
    label: 'eh',
  },
  2: {
    icon: <PriorityHighIcon color="success" />,
    label: 'hmm',
  },
  3: {
    icon: <PriorityHighIcon color="warning" />,
    label: 'Important!',
  },
  4: {
    icon: <PriorityHighIcon color="error" />,
    label: 'Real Shit',
  },
  5: {
    icon: <PriorityHighIcon color="error" />,
    label: 'Top priority!',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
