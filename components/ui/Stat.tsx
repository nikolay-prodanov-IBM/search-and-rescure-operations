import React from 'react';

/**
 * Props for the Stat component.
 * @param icon - A React element (an icon component) to be displayed.
 * @param label - The text label for the statistic.
 * @param value - The value of the statistic.
 * @param unit - An optional unit to display next to the value (e.g., "km/h").
 */
interface StatProps {
  icon: React.ReactElement<{ className?: string }>;
  label: string;
  value: string | number;
  unit?: string;
}

/**
 * A component to display a single, prominent statistic with an icon, label, and value.
 * Commonly used on dashboards.
 */
const Stat: React.FC<StatProps> = ({ icon, label, value, unit }) => {
  return (
    <div className="flex items-center p-4 bg-secondary rounded-lg">
      <div className="flex-shrink-0">
        {/* Clone the provided icon to inject additional CSS classes without overwriting existing ones. */}
        {React.cloneElement(icon, {
          className: `h-8 w-8 text-highlight ${icon.props.className || ''}`.trim(),
        })}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-accent truncate">{label}</p>
        <p className="text-2xl font-bold text-light">
          {value}
          {unit && <span className="ml-1 text-base font-normal text-accent">{unit}</span>}
        </p>
      </div>
    </div>
  );
};

export default Stat;