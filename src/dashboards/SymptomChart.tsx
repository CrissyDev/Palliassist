import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

import { TrendingUp, Activity } from "lucide-react";

const data = [
  { day: 'Mon', pain: 7, fatigue: 6, sleep: 5 },
  { day: 'Tue', pain: 6, fatigue: 5, sleep: 6 },
  { day: 'Wed', pain: 5, fatigue: 5, sleep: 7 },
  { day: 'Thu', pain: 4, fatigue: 4, sleep: 7 },
  { day: 'Fri', pain: 4, fatigue: 3, sleep: 8 },
  { day: 'Sat', pain: 3, fatigue: 3, sleep: 8 },
  { day: 'Sun', pain: 3, fatigue: 2, sleep: 9 },
];

const SymptomChart = () => {
  return (
    <div className='bg-white rounded-3xl shadow-sm p-6'>
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h2 className='text-2xl font-bold text-slate-800'>
            Symptom Trends
          </h2>
          <p className='text-slate-500 mt-2'>
            Weekly patient symptom analytics powered by PalliAssist AI.
          </p>
        </div>

        <div className='flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl'>
          <TrendingUp size={18} />
          <span className='font-semibold text-sm'>Improving</span>
        </div>
      </div>

      {/* Chart */}
      <div className='h-80'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='painGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#2563EB' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#2563EB' stopOpacity={0} />
              </linearGradient>

              <linearGradient id='fatigueGradient' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#06B6D4' stopOpacity={0.3} />
                <stop offset='95%' stopColor='#06B6D4' stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray='3 3' stroke='#E2E8F0' />

            <XAxis
              dataKey='day'
              stroke='#64748B'
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke='#64748B'
              tickLine={false}
              axisLine={false}
              domain={[0, 10]}
            />

            <Tooltip
              contentStyle={{
                borderRadius: '16px',
                border: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              }}
            />

            {/* Pain */}
            <Area
              type='monotone'
              dataKey='pain'
              stroke='#2563EB'
              strokeWidth={3}
              fill='url(#painGradient)'
              name='Pain Level'
            />

            {/* Fatigue */}
            <Area
              type='monotone'
              dataKey='fatigue'
              stroke='#06B6D4'
              strokeWidth={3}
              fill='url(#fatigueGradient)'
              name='Fatigue'
            />

            {/* Sleep */}
            <Line
              type='monotone'
              dataKey='sleep'
              stroke='#10B981'
              strokeWidth={3}
              dot={{ r: 4, fill: '#10B981' }}
              activeDot={{ r: 6 }}
              name='Sleep Quality'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className='grid md:grid-cols-3 gap-4 mt-8'>
        <div className='bg-blue-50 rounded-2xl p-4'>
          <div className='flex items-center gap-2 text-blue-700 mb-2'>
            <Activity size={18} />
            <span className='font-semibold'>Pain</span>
          </div>
          <p className='text-2xl font-bold text-slate-800'>↓ 57%</p>
          <p className='text-sm text-slate-500 mt-1'>
            Significant improvement this week
          </p>
        </div>

        <div className='bg-cyan-50 rounded-2xl p-4'>
          <div className='flex items-center gap-2 text-cyan-700 mb-2'>
            <Activity size={18} />
            <span className='font-semibold'>Fatigue</span>
          </div>
          <p className='text-2xl font-bold text-slate-800'>↓ 67%</p>
          <p className='text-sm text-slate-500 mt-1'>
            Energy levels are stabilizing
          </p>
        </div>

        <div className='bg-green-50 rounded-2xl p-4'>
          <div className='flex items-center gap-2 text-green-700 mb-2'>
            <Activity size={18} />
            <span className='font-semibold'>Sleep</span>
          </div>
          <p className='text-2xl font-bold text-slate-800'>↑ 80%</p>
          <p className='text-sm text-slate-500 mt-1'>
            Sleep quality has improved
          </p>
        </div>
      </div>

      {/* AI Summary */}
      <div className='mt-6 bg-slate-50 rounded-2xl p-5 border border-slate-200'>
        <div className='flex items-center gap-3 mb-3'>
          <div className='w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center'>
            <TrendingUp className='text-blue-600' size={20} />
          </div>
          <div>
            <h3 className='font-semibold text-slate-800'>AI Clinical Summary</h3>
            <p className='text-sm text-slate-500'>
              Generated from symptom patterns
            </p>
          </div>
        </div>

        <p className='text-slate-700 leading-7'>
          Symptom burden is trending downward across the monitored cohort.
          Pain and fatigue scores have decreased consistently over the last
          seven days, while sleep quality has improved. Continue the current
          care plan and maintain daily symptom monitoring for high-risk
          patients.
        </p>
      </div>
    </div>
  );
};

export default SymptomChart