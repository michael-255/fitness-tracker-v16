import { AppTable, Field, Operation } from '@/constants/core/data-enums'
import type { DatabaseObject, DataTableProps } from '@/constants/types-interfaces'
import { Activity, type IActivity } from '@/models/__Activity'
import type { LocalDatabase } from '@/services/LocalDatabase'
// import { defineAsyncComponent } from 'vue'

export interface IWorkout extends IActivity {
  exerciseIds: string[]
}

/**
 * Workout Class
 * @param params IWorkout
 */
export class Workout extends Activity {
  exerciseIds: string[]

  constructor(params: IWorkout) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
    })
    this.exerciseIds = params.exerciseIds
  }

  /**
   * Creates the chart data and settings for the reports.
   * @param database
   * @param id
   */
  static async report(database: LocalDatabase, id: string): Promise<any> {
    // const records = (await database.getByParentId(AppTable.WORKOUT_RECORDS, id)) as WorkoutRecord[]
    // const parent = (await database.getById(AppTable.WORKOUTS, id)) as Workout
    // const duration = records.map((r) => {
    //   const started = new Date(r?.createdDate).getTime()
    //   const finished = new Date(r?.finishedDate).getTime()
    //   return (finished - started) / 1000 / 60 // gets the minutes
    // })
    // const datasets = []
    // datasets.push({
    //   label: 'Duration (minutes)',
    //   borderColor: '#1976D2',
    //   data: duration,
    // })
    // return {
    //   title: parent?.name,
    //   chartData: {
    //     labels: records.map(() => ''),
    //     datasets: datasets,
    //   },
    //   firstDate: isoToDisplayDate(records[0]?.createdDate),
    //   lastDate: isoToDisplayDate(records[records.length - 1]?.createdDate),
    // }
  }

  static async update(
    database: LocalDatabase,
    originalId: string,
    props: DatabaseObject
  ): Promise<void> {
    const { id, createdDate, name, exerciseIds } = props
    await database.updateById(
      AppTable.WORKOUTS,
      originalId,
      new Workout({ id, createdDate, name, exerciseIds })
    )
  }

  static async create(database: LocalDatabase, data: DatabaseObject): Promise<void> {
    const { id, createdDate, name, exerciseIds } = data
    await database.add(AppTable.WORKOUTS, new Workout({ id, createdDate, name, exerciseIds }))
  }

  static async getAll(database: LocalDatabase): Promise<Workout[]> {
    return await database.getAll(AppTable.WORKOUTS)
  }

  static getLabelSingular(): string {
    return 'Workout'
  }

  static getLabelPlural(): string {
    return 'Workouts'
  }

  static getParentTable(): AppTable | null {
    return null
  }

  static getOperations(): Operation[] {
    return [
      Operation.CREATE,
      Operation.UPDATE,
      Operation.REPORT,
      Operation.DELETE,
      Operation.CLEAR,
      Operation.INSPECT,
    ]
  }

  static getVisibleColumns(): Field[] {
    return [Field.NAME]
  }

  static getFields(): Field[] {
    return [...Activity.getFields(), Field.EXERCISE_IDS]
  }

  static getFieldComponents(): any {
    return [
      ...Activity.getFieldComponents(),
      // defineAsyncComponent(() => import('@/components/page-table/inputs/ExerciseIdsSelect.vue')),
    ]
  }

  static getColumns(): DataTableProps[] {
    return [
      ...Activity.getColumns(),
      {
        name: Field.EXERCISE_IDS,
        label: 'Exercise Ids',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_IDS],
        format: (val: string[]) => val,
      },
    ]
  }
}
