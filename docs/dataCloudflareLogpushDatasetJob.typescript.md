# `dataCloudflareLogpushDatasetJob` Submodule <a name="`dataCloudflareLogpushDatasetJob` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLogpushDatasetJob <a name="DataCloudflareLogpushDatasetJob" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/logpush_dataset_job cloudflare_logpush_dataset_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

new dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob(scope: Construct, id: string, config: DataCloudflareLogpushDatasetJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig">DataCloudflareLogpushDatasetJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig">DataCloudflareLogpushDatasetJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLogpushDatasetJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareLogpushDatasetJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLogpushDatasetJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLogpushDatasetJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/logpush_dataset_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLogpushDatasetJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.destinationConf">destinationConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastComplete">lastComplete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastError">lastError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.logpullOptions">logpullOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadBytes">maxUploadBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadIntervalSeconds">maxUploadIntervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadRecords">maxUploadRecords</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.outputOptions">outputOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference">DataCloudflareLogpushDatasetJobOutputOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetIdInput">datasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetId">datasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `destinationConf`<sup>Required</sup> <a name="destinationConf" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.destinationConf"></a>

```typescript
public readonly destinationConf: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `lastComplete`<sup>Required</sup> <a name="lastComplete" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastComplete"></a>

```typescript
public readonly lastComplete: string;
```

- *Type:* string

---

##### `lastError`<sup>Required</sup> <a name="lastError" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.lastError"></a>

```typescript
public readonly lastError: string;
```

- *Type:* string

---

##### `logpullOptions`<sup>Required</sup> <a name="logpullOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.logpullOptions"></a>

```typescript
public readonly logpullOptions: string;
```

- *Type:* string

---

##### `maxUploadBytes`<sup>Required</sup> <a name="maxUploadBytes" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadBytes"></a>

```typescript
public readonly maxUploadBytes: number;
```

- *Type:* number

---

##### `maxUploadIntervalSeconds`<sup>Required</sup> <a name="maxUploadIntervalSeconds" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadIntervalSeconds"></a>

```typescript
public readonly maxUploadIntervalSeconds: number;
```

- *Type:* number

---

##### `maxUploadRecords`<sup>Required</sup> <a name="maxUploadRecords" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.maxUploadRecords"></a>

```typescript
public readonly maxUploadRecords: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputOptions`<sup>Required</sup> <a name="outputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.outputOptions"></a>

```typescript
public readonly outputOptions: DataCloudflareLogpushDatasetJobOutputOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference">DataCloudflareLogpushDatasetJobOutputOptionsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetIdInput"></a>

```typescript
public readonly datasetIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLogpushDatasetJobConfig <a name="DataCloudflareLogpushDatasetJobConfig" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.Initializer"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

const dataCloudflareLogpushDatasetJobConfig: dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.datasetId">datasetId</a></code> | <code>string</code> | Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/). |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

Name of the dataset. A list of supported datasets can be found on the [Developer Docs](https://developers.cloudflare.com/logs/reference/log-fields/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/logpush_dataset_job#dataset_id DataCloudflareLogpushDatasetJob#dataset_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/logpush_dataset_job#account_id DataCloudflareLogpushDatasetJob#account_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/data-sources/logpush_dataset_job#zone_id DataCloudflareLogpushDatasetJob#zone_id}

---

### DataCloudflareLogpushDatasetJobOutputOptions <a name="DataCloudflareLogpushDatasetJobOutputOptions" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions.Initializer"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

const dataCloudflareLogpushDatasetJobOutputOptions: dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLogpushDatasetJobOutputOptionsOutputReference <a name="DataCloudflareLogpushDatasetJobOutputOptionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLogpushDatasetJob } from '@cdktf/provider-cloudflare'

new dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchPrefix">batchPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchSuffix">batchSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.cve202144228">cve202144228</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldNames">fieldNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.outputType">outputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordPrefix">recordPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordSuffix">recordSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordTemplate">recordTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.sampleRate">sampleRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions">DataCloudflareLogpushDatasetJobOutputOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchPrefix`<sup>Required</sup> <a name="batchPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchPrefix"></a>

```typescript
public readonly batchPrefix: string;
```

- *Type:* string

---

##### `batchSuffix`<sup>Required</sup> <a name="batchSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.batchSuffix"></a>

```typescript
public readonly batchSuffix: string;
```

- *Type:* string

---

##### `cve202144228`<sup>Required</sup> <a name="cve202144228" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.cve202144228"></a>

```typescript
public readonly cve202144228: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `fieldNames`<sup>Required</sup> <a name="fieldNames" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.fieldNames"></a>

```typescript
public readonly fieldNames: string[];
```

- *Type:* string[]

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.outputType"></a>

```typescript
public readonly outputType: string;
```

- *Type:* string

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `recordPrefix`<sup>Required</sup> <a name="recordPrefix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordPrefix"></a>

```typescript
public readonly recordPrefix: string;
```

- *Type:* string

---

##### `recordSuffix`<sup>Required</sup> <a name="recordSuffix" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordSuffix"></a>

```typescript
public readonly recordSuffix: string;
```

- *Type:* string

---

##### `recordTemplate`<sup>Required</sup> <a name="recordTemplate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.recordTemplate"></a>

```typescript
public readonly recordTemplate: string;
```

- *Type:* string

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.sampleRate"></a>

```typescript
public readonly sampleRate: number;
```

- *Type:* number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.timestampFormat"></a>

```typescript
public readonly timestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLogpushDatasetJobOutputOptions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLogpushDatasetJob.DataCloudflareLogpushDatasetJobOutputOptions">DataCloudflareLogpushDatasetJobOutputOptions</a>

---



