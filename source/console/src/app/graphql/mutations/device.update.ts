import gql from 'graphql-tag'

export default gql`
    mutation UpdateDevice(
        $thingId: String!
        $name: String!
        $namespace: String!
        $deviceTypeId: String!
        $deviceBlueprintId: String!
        $spec: AWSJSON!
    ) {
        updateDevice(
            thingId: $thingId
            name: $name
            namespace: $namespace
            deviceTypeId: $deviceTypeId
            deviceBlueprintId: $deviceBlueprintId
            spec: $spec
        ) {
            thingId
            thingName
            thingArn
            name
            namespace
            deviceTypeId
            deviceBlueprintId
            greengrassGroupId
            spec
            metadata
            lastDeploymentId
            createdAt
            updatedAt
        }
    }
`
