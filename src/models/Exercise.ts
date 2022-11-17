import { AppTable, Field, Operation, ExerciseTracks } from '@/constants/core/data-enums'
import type { DatabaseObject, DataTableProps } from '@/constants/types-interfaces'
import { Activity, type IActivity } from '@/models/__Activity'
import type { LocalDatabase } from '@/services/LocalDatabase'
import { defineAsyncComponent } from 'vue'

export interface IExercise extends IActivity {
  exerciseTracks: ExerciseTracks[]
}

/**
 * Exercise Class
 * @param params IExercise
 */
export class Exercise extends Activity {
  exerciseTracks: ExerciseTracks[]

  constructor(params: IExercise) {
    super({
      id: params.id,
      createdDate: params.createdDate,
      name: params.name,
    })
    this.exerciseTracks = params.exerciseTracks
  }

  /**
   * Creates the chart data and settings for the reports.
   * @param database
   * @param id
   */
  static async report(database: LocalDatabase, id: string): Promise<any> {
    // const records = (await database.getByParentId(
    //   AppTable.EXERCISE_RECORDS,
    //   id
    // )) as ExerciseRecord[]
    // const parent = (await database.getById(AppTable.EXERCISES, id)) as Exercise
    // const totalReps = records.map((r: any) => {
    //   if (r?.reps) {
    //     return r.reps.reduce((total: number, current: number) => {
    //       if (current) {
    //         return total + current
    //       }
    //     }, 0)
    //   } else {
    //     return 0
    //   }
    // })
    // const totalWeight = records.map((r: any) => {
    //   if (r?.weight) {
    //     return r.weight.reduce((total: number, current: number) => {
    //       if (current) {
    //         return total + current
    //       }
    //     }, 0)
    //   } else {
    //     return 0
    //   }
    // })
    // const datasets = []
    // datasets.push({
    //   label: 'Total Reps',
    //   borderColor: '#1976D2',
    //   data: totalReps,
    // })
    // datasets.push({
    //   label: 'Total Weight (lbs)',
    //   borderColor: '#C10015',
    //   data: totalWeight,
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

  static async update(database: LocalDatabase, data: DatabaseObject): Promise<void> {
    const { originalId, id, createdDate, name, exerciseTracks } = data
    await database.updateById(
      originalId,
      AppTable.EXERCISES,
      new Exercise({ id, createdDate, name, exerciseTracks })
    )
  }

  static async create(database: LocalDatabase, data: DatabaseObject): Promise<void> {
    const { id, createdDate, name } = data
    let { exerciseTracks } = data
    // Had to spread the array in an array to bypass an error with the database add function
    exerciseTracks = [...exerciseTracks]
    await database.add(AppTable.EXERCISES, new Exercise({ id, createdDate, name, exerciseTracks }))
  }

  static async getAll(database: LocalDatabase): Promise<Exercise[]> {
    return await database.getAll(AppTable.EXERCISES)
  }

  static getLabelSingular(): string {
    return 'Exercise'
  }

  static getLabelPlural(): string {
    return 'Exercises'
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
    return [...Activity.getFields(), Field.EXERCISE_TRACKS]
  }

  static getFieldComponents(): any {
    return [
      ...Activity.getFieldComponents(),
      defineAsyncComponent(
        () => import('@/components/shared/operation-dialog/inputs/ExerciseTracksSelect.vue')
      ),
    ]
  }

  static getColumns(): DataTableProps[] {
    return [
      ...Activity.getColumns(),
      {
        name: Field.EXERCISE_TRACKS,
        label: 'Tracks',
        align: 'left',
        sortable: true,
        required: false,
        field: (row: any) => row[Field.EXERCISE_TRACKS],
        format: (val: string) => val,
      },
    ]
  }
}
