import React from 'react';
import type { Frasco } from '../types';
import { HOURS } from '../types';
import { useAppContext } from '../context';
import TimeSlotRow from './TimeSlotRow';

interface TimelineProps {
  frascoMap: Record<string, Frasco>;
}

export default function Timeline({ frascoMap }: TimelineProps) {
  const { state } = useAppContext();

  // Build a map from hour -> TimeSlot for quick lookup
  const slotMap: Record<number, typeof state.prescription.timeline[0]> = {};
  state.prescription.timeline.forEach(slot => {
    slotMap[slot.hour] = slot;
  });

  return (
    <div className="flex-1 overflow-y-auto border border-gray-200 rounded-lg bg-white">
      {HOURS.map(hour => {
        const slot = slotMap[hour] ?? { hour, entries: [] };
        return (
          <TimeSlotRow
            key={hour}
            slot={slot}
            frascoMap={frascoMap}
          />
        );
      })}
    </div>
  );
}
