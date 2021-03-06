import test from 'ava';
import Tester from './helpers/Tester';
import { ChartTracer, LogTracer, VerticalLayout } from '..';

test('VerticalLayout', new Tester(execute => {
  let chartTracer;
  let logTracer;
  let layout;
  let key;

  execute([
      chartTracer = new ChartTracer(),
      logTracer = new LogTracer(),
      layout = new VerticalLayout([chartTracer, logTracer]),
      key = layout.key,
    ],
    { key: chartTracer.key, method: 'ChartTracer', args: [] },
    { key: logTracer.key, method: 'LogTracer', args: [] },
    { key, method: 'VerticalLayout', args: [[chartTracer.key, logTracer.key]] },
  );

  execute([
      layout.add(chartTracer),
    ],
    { key, method: 'add', args: [chartTracer.key] },
  );

  execute([
      layout.destroy(),
    ],
    { key, method: 'destroy', args: [] },
  );

  execute([
      layout.remove(logTracer),
    ],
    { key, method: 'remove', args: [logTracer.key] },
  );

  execute([
      layout.removeAll(),
    ],
    { key, method: 'removeAll', args: [] },
  );
}).test);
