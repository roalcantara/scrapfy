// tslint:disable: max-classes-per-file
import { ReflectUtils } from './reflect.utils'

class Power {
  name: string
  level: number
}

class Hero {
  name: string

  constructor(public powers = new Array<Power>()) {}

  addToPower(power: Power): void {
    this.powers.push(power)
  }
}

describe('ReflectUtils', () => {
  let metadataKey: string
  const hero = new Hero()
  const target = Object.getPrototypeOf(hero)
  const targetIndex = target.constructor.name

  describe('.set()', () => {
    beforeEach(() => {
      metadataKey = 'ninja.key.set'

      ReflectUtils.set({
        key: metadataKey,
        target,
        property: 'addToPower',
        value: 'addToPowerMetaData'
      })
    })

    it('sets the metadata info into the key', () => {
      expect(ReflectUtils.items[metadataKey]).toEqual({
        [targetIndex]: {
          object: target,
          addToPower: {
            value: 'addToPowerMetaData',
            propertyDescriptor: undefined
          }
        }
      })
    })

    describe('when setting an already set key', () => {
      beforeEach(() => {
        metadataKey = 'ninja.key.set'

        ReflectUtils.set({
          key: metadataKey,
          target,
          property: 'addToPower',
          value: 'addToSuperPowerMetaData'
        })
      })

      it('replaces the metadata info into the key', () => {
        expect(ReflectUtils.items[metadataKey]).toEqual({
          [targetIndex]: {
            object: target,
            addToPower: {
              value: 'addToSuperPowerMetaData',
              propertyDescriptor: undefined
            }
          }
        })
      })
    })
  })

  describe('.add()', () => {
    beforeEach(() => {
      metadataKey = 'ninja.key.add'
    })

    describe('when many values are added to the same key', () => {
      beforeEach(() => {
        ReflectUtils.add({
          key: metadataKey,
          target,
          property: 'addToPower',
          value: 'addToPowerMetaData'
        })

        ReflectUtils.add({
          key: metadataKey,
          target,
          property: 'addToPower',
          value: 'addToPowerMetaDataAgain'
        })
      })

      it('adds the metadata info into the key', () => {
        expect(ReflectUtils.items[metadataKey]).toEqual({
          [targetIndex]: {
            object: target,
            addToPower: {
              value: ['addToPowerMetaData', 'addToPowerMetaDataAgain'],
              propertyDescriptor: undefined
            }
          }
        })
      })
    })

    describe('when the added key had already been set', () => {
      beforeEach(() => {
        metadataKey = 'ninja.key.add'

        ReflectUtils.set({
          key: metadataKey,
          target,
          property: 'addToPower',
          value: 'addToPowerMetaData'
        })

        ReflectUtils.add({
          key: metadataKey,
          target,
          property: 'addToPower',
          value: 'addToPowerMetaDataAgain'
        })
      })

      it('adds the metadata info into the key', () => {
        expect(ReflectUtils.items[metadataKey]).toEqual({
          [targetIndex]: {
            object: target,
            addToPower: {
              value: ['addToPowerMetaData', 'addToPowerMetaDataAgain'],
              propertyDescriptor: undefined
            }
          }
        })
      })
    })
  })

  describe('.all()', () => {
    beforeEach(() => {
      metadataKey = 'ninja.key.all'
    })

    describe('when a metadataKey is given', () => {
      beforeEach(() => {
        ReflectUtils.set({
          key: metadataKey,
          target,
          property: 'addToPower',
          value: 'addToPowerMetaData'
        })
      })

      it('returns all MetaArgs for the given metadataKey', () => {
        expect(ReflectUtils.all({ key: metadataKey })).toEqual([
          {
            key: metadataKey,
            target,
            property: 'addToPower',
            value: 'addToPowerMetaData'
          }
        ])
      })

      describe('when there are may metadata configurated to the given metadataKey', () => {
        beforeEach(() => {
          ReflectUtils.add({
            key: metadataKey,
            target,
            property: 'addToPower',
            value: 'addToPowerMetaDataAgain'
          })
        })

        it('returns all MetaArgs for the given metadataKey', () => {
          expect(ReflectUtils.all({ key: metadataKey })).toEqual([
            {
              key: metadataKey,
              target,
              property: 'addToPower',
              value: 'addToPowerMetaData'
            },
            {
              key: metadataKey,
              target,
              property: 'addToPower',
              value: 'addToPowerMetaDataAgain'
            }
          ])
        })
      })
    })
  })
})
