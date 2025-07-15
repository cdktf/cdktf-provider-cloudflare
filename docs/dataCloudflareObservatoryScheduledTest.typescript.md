# `dataCloudflareObservatoryScheduledTest` Submodule <a name="`dataCloudflareObservatoryScheduledTest` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareObservatoryScheduledTest <a name="DataCloudflareObservatoryScheduledTest" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/observatory_scheduled_test cloudflare_observatory_scheduled_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer"></a>

```typescript
import { dataCloudflareObservatoryScheduledTest } from '@cdktf/provider-cloudflare'

new dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest(scope: Construct, id: string, config: DataCloudflareObservatoryScheduledTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig">DataCloudflareObservatoryScheduledTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig">DataCloudflareObservatoryScheduledTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareObservatoryScheduledTest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct"></a>

```typescript
import { dataCloudflareObservatoryScheduledTest } from '@cdktf/provider-cloudflare'

dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement"></a>

```typescript
import { dataCloudflareObservatoryScheduledTest } from '@cdktf/provider-cloudflare'

dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource"></a>

```typescript
import { dataCloudflareObservatoryScheduledTest } from '@cdktf/provider-cloudflare'

dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport"></a>

```typescript
import { dataCloudflareObservatoryScheduledTest } from '@cdktf/provider-cloudflare'

dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareObservatoryScheduledTest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareObservatoryScheduledTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareObservatoryScheduledTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareObservatoryScheduledTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareObservatoryScheduledTestConfig <a name="DataCloudflareObservatoryScheduledTestConfig" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.Initializer"></a>

```typescript
import { dataCloudflareObservatoryScheduledTest } from '@cdktf/provider-cloudflare'

const dataCloudflareObservatoryScheduledTestConfig: dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.url">url</a></code> | <code>string</code> | A URL. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.region">region</a></code> | <code>string</code> | A test region. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

A URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/observatory_scheduled_test#url DataCloudflareObservatoryScheduledTest#url}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/observatory_scheduled_test#zone_id DataCloudflareObservatoryScheduledTest#zone_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.dataCloudflareObservatoryScheduledTest.DataCloudflareObservatoryScheduledTestConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

A test region.

Available values: "asia-east1", "asia-northeast1", "asia-northeast2", "asia-south1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west8", "europe-west9", "me-west1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-south1", "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/observatory_scheduled_test#region DataCloudflareObservatoryScheduledTest#region}

---



