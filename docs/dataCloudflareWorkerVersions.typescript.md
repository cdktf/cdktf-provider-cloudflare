# `dataCloudflareWorkerVersions` Submodule <a name="`dataCloudflareWorkerVersions` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkerVersions <a name="DataCloudflareWorkerVersions" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/worker_versions cloudflare_worker_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersions(scope: Construct, id: string, config: DataCloudflareWorkerVersionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig">DataCloudflareWorkerVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig">DataCloudflareWorkerVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareWorkerVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkerVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkerVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/worker_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkerVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput">workerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId">workerId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.result"></a>

```typescript
public readonly result: DataCloudflareWorkerVersionsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList">DataCloudflareWorkerVersionsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `workerIdInput`<sup>Optional</sup> <a name="workerIdInput" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerIdInput"></a>

```typescript
public readonly workerIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkerVersionsConfig <a name="DataCloudflareWorkerVersionsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsConfig: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId">workerId</a></code> | <code>string</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/worker_versions#account_id DataCloudflareWorkerVersions#account_id}

---

##### `workerId`<sup>Required</sup> <a name="workerId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.workerId"></a>

```typescript
public readonly workerId: string;
```

- *Type:* string

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/worker_versions#worker_id DataCloudflareWorkerVersions#worker_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/worker_versions#max_items DataCloudflareWorkerVersions#max_items}

---

### DataCloudflareWorkerVersionsResult <a name="DataCloudflareWorkerVersionsResult" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResult: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult = { ... }
```


### DataCloudflareWorkerVersionsResultAnnotations <a name="DataCloudflareWorkerVersionsResultAnnotations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultAnnotations: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations = { ... }
```


### DataCloudflareWorkerVersionsResultAssets <a name="DataCloudflareWorkerVersionsResultAssets" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultAssets: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets = { ... }
```


### DataCloudflareWorkerVersionsResultAssetsConfig <a name="DataCloudflareWorkerVersionsResultAssetsConfig" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultAssetsConfig: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig = { ... }
```


### DataCloudflareWorkerVersionsResultBindings <a name="DataCloudflareWorkerVersionsResultBindings" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultBindings: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings = { ... }
```


### DataCloudflareWorkerVersionsResultBindingsOutbound <a name="DataCloudflareWorkerVersionsResultBindingsOutbound" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultBindingsOutbound: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound = { ... }
```


### DataCloudflareWorkerVersionsResultBindingsOutboundWorker <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorker" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultBindingsOutboundWorker: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker = { ... }
```


### DataCloudflareWorkerVersionsResultLimits <a name="DataCloudflareWorkerVersionsResultLimits" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultLimits: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits = { ... }
```


### DataCloudflareWorkerVersionsResultMigrations <a name="DataCloudflareWorkerVersionsResultMigrations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultMigrations: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations = { ... }
```


### DataCloudflareWorkerVersionsResultMigrationsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultMigrationsRenamedClasses: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses = { ... }
```


### DataCloudflareWorkerVersionsResultMigrationsSteps <a name="DataCloudflareWorkerVersionsResultMigrationsSteps" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultMigrationsSteps: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps = { ... }
```


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses = { ... }
```


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses = { ... }
```


### DataCloudflareWorkerVersionsResultMigrationsTransferredClasses <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultMigrationsTransferredClasses: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses = { ... }
```


### DataCloudflareWorkerVersionsResultModules <a name="DataCloudflareWorkerVersionsResultModules" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultModules: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules = { ... }
```


### DataCloudflareWorkerVersionsResultPlacement <a name="DataCloudflareWorkerVersionsResultPlacement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

const dataCloudflareWorkerVersionsResultPlacement: dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkerVersionsResultAnnotationsOutputReference <a name="DataCloudflareWorkerVersionsResultAnnotationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage">workersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag">workersTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy">workersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workersMessage`<sup>Required</sup> <a name="workersMessage" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersMessage"></a>

```typescript
public readonly workersMessage: string;
```

- *Type:* string

---

##### `workersTag`<sup>Required</sup> <a name="workersTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTag"></a>

```typescript
public readonly workersTag: string;
```

- *Type:* string

---

##### `workersTriggeredBy`<sup>Required</sup> <a name="workersTriggeredBy" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.workersTriggeredBy"></a>

```typescript
public readonly workersTriggeredBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultAnnotations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotations">DataCloudflareWorkerVersionsResultAnnotations</a>

---


### DataCloudflareWorkerVersionsResultAssetsConfigOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling">htmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling">notFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst">runWorkerFirst</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `htmlHandling`<sup>Required</sup> <a name="htmlHandling" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.htmlHandling"></a>

```typescript
public readonly htmlHandling: string;
```

- *Type:* string

---

##### `notFoundHandling`<sup>Required</sup> <a name="notFoundHandling" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.notFoundHandling"></a>

```typescript
public readonly notFoundHandling: string;
```

- *Type:* string

---

##### `runWorkerFirst`<sup>Required</sup> <a name="runWorkerFirst" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.runWorkerFirst"></a>

```typescript
public readonly runWorkerFirst: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultAssetsConfig;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfig">DataCloudflareWorkerVersionsResultAssetsConfig</a>

---


### DataCloudflareWorkerVersionsResultAssetsOutputReference <a name="DataCloudflareWorkerVersionsResultAssetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt">jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.config"></a>

```typescript
public readonly config: DataCloudflareWorkerVersionsResultAssetsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsConfigOutputReference">DataCloudflareWorkerVersionsResultAssetsConfigOutputReference</a>

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.jwt"></a>

```typescript
public readonly jwt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultAssets;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssets">DataCloudflareWorkerVersionsResultAssets</a>

---


### DataCloudflareWorkerVersionsResultBindingsList <a name="DataCloudflareWorkerVersionsResultBindingsList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params">params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker">worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.params"></a>

```typescript
public readonly params: string[];
```

- *Type:* string[]

---

##### `worker`<sup>Required</sup> <a name="worker" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.worker"></a>

```typescript
public readonly worker: DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultBindingsOutbound;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutbound">DataCloudflareWorkerVersionsResultBindingsOutbound</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultBindingsOutboundWorker;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundWorker">DataCloudflareWorkerVersionsResultBindingsOutboundWorker</a>

---


### DataCloudflareWorkerVersionsResultBindingsOutputReference <a name="DataCloudflareWorkerVersionsResultBindingsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedDestinationAddresses">allowedDestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedSenderAddresses">allowedSenderAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className">className</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json">json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64">keyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk">keyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.oldName">oldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound">outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.part">part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline">pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName">queueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName">scriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName">secretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId">storeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `allowedDestinationAddresses`<sup>Required</sup> <a name="allowedDestinationAddresses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedDestinationAddresses"></a>

```typescript
public readonly allowedDestinationAddresses: string[];
```

- *Type:* string[]

---

##### `allowedSenderAddresses`<sup>Required</sup> <a name="allowedSenderAddresses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.allowedSenderAddresses"></a>

```typescript
public readonly allowedSenderAddresses: string[];
```

- *Type:* string[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.className"></a>

```typescript
public readonly className: string;
```

- *Type:* string

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.json"></a>

```typescript
public readonly json: string;
```

- *Type:* string

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.jurisdiction"></a>

```typescript
public readonly jurisdiction: string;
```

- *Type:* string

---

##### `keyBase64`<sup>Required</sup> <a name="keyBase64" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyBase64"></a>

```typescript
public readonly keyBase64: string;
```

- *Type:* string

---

##### `keyJwk`<sup>Required</sup> <a name="keyJwk" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.keyJwk"></a>

```typescript
public readonly keyJwk: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `oldName`<sup>Required</sup> <a name="oldName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.oldName"></a>

```typescript
public readonly oldName: string;
```

- *Type:* string

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.outbound"></a>

```typescript
public readonly outbound: DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference">DataCloudflareWorkerVersionsResultBindingsOutboundOutputReference</a>

---

##### `part`<sup>Required</sup> <a name="part" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.part"></a>

```typescript
public readonly part: string;
```

- *Type:* string

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.pipeline"></a>

```typescript
public readonly pipeline: string;
```

- *Type:* string

---

##### `queueName`<sup>Required</sup> <a name="queueName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.queueName"></a>

```typescript
public readonly queueName: string;
```

- *Type:* string

---

##### `scriptName`<sup>Required</sup> <a name="scriptName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.scriptName"></a>

```typescript
public readonly scriptName: string;
```

- *Type:* string

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.secretName"></a>

```typescript
public readonly secretName: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.storeId"></a>

```typescript
public readonly storeId: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultBindings;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindings">DataCloudflareWorkerVersionsResultBindings</a>

---


### DataCloudflareWorkerVersionsResultLimitsOutputReference <a name="DataCloudflareWorkerVersionsResultLimitsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs">cpuMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuMs`<sup>Required</sup> <a name="cpuMs" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.cpuMs"></a>

```typescript
public readonly cpuMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultLimits;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimits">DataCloudflareWorkerVersionsResultLimits</a>

---


### DataCloudflareWorkerVersionsResultList <a name="DataCloudflareWorkerVersionsResultList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses">newClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag">newTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag">oldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

---

##### `newTag`<sup>Required</sup> <a name="newTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.newTag"></a>

```typescript
public readonly newTag: string;
```

- *Type:* string

---

##### `oldTag`<sup>Required</sup> <a name="oldTag" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.oldTag"></a>

```typescript
public readonly oldTag: string;
```

- *Type:* string

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.steps"></a>

```typescript
public readonly steps: DataCloudflareWorkerVersionsResultMigrationsStepsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList">DataCloudflareWorkerVersionsResultMigrationsStepsList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultMigrations;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrations">DataCloudflareWorkerVersionsResultMigrations</a>

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultMigrationsRenamedClasses;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses">deletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses">newClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses">newSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses">renamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses">transferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletedClasses`<sup>Required</sup> <a name="deletedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.deletedClasses"></a>

```typescript
public readonly deletedClasses: string[];
```

- *Type:* string[]

---

##### `newClasses`<sup>Required</sup> <a name="newClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newClasses"></a>

```typescript
public readonly newClasses: string[];
```

- *Type:* string[]

---

##### `newSqliteClasses`<sup>Required</sup> <a name="newSqliteClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```typescript
public readonly newSqliteClasses: string[];
```

- *Type:* string[]

---

##### `renamedClasses`<sup>Required</sup> <a name="renamedClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.renamedClasses"></a>

```typescript
public readonly renamedClasses: DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList</a>

---

##### `transferredClasses`<sup>Required</sup> <a name="transferredClasses" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.transferredClasses"></a>

```typescript
public readonly transferredClasses: DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultMigrationsSteps;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsSteps">DataCloudflareWorkerVersionsResultMigrationsSteps</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses">DataCloudflareWorkerVersionsResultMigrationsStepsRenamedClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsStepsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference <a name="DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from">from</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript">fromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to">to</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.from"></a>

```typescript
public readonly from: string;
```

- *Type:* string

---

##### `fromScript`<sup>Required</sup> <a name="fromScript" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```typescript
public readonly fromScript: string;
```

- *Type:* string

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.to"></a>

```typescript
public readonly to: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultMigrationsTransferredClasses;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsTransferredClasses">DataCloudflareWorkerVersionsResultMigrationsTransferredClasses</a>

---


### DataCloudflareWorkerVersionsResultModulesList <a name="DataCloudflareWorkerVersionsResultModulesList" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get"></a>

```typescript
public get(index: number): DataCloudflareWorkerVersionsResultModulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareWorkerVersionsResultModulesOutputReference <a name="DataCloudflareWorkerVersionsResultModulesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64">contentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentBase64`<sup>Required</sup> <a name="contentBase64" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentBase64"></a>

```typescript
public readonly contentBase64: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultModules;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModules">DataCloudflareWorkerVersionsResultModules</a>

---


### DataCloudflareWorkerVersionsResultOutputReference <a name="DataCloudflareWorkerVersionsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations">annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets">assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings">bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate">compatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags">compatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule">mainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations">migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules">modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel">usageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.annotations"></a>

```typescript
public readonly annotations: DataCloudflareWorkerVersionsResultAnnotationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAnnotationsOutputReference">DataCloudflareWorkerVersionsResultAnnotationsOutputReference</a>

---

##### `assets`<sup>Required</sup> <a name="assets" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.assets"></a>

```typescript
public readonly assets: DataCloudflareWorkerVersionsResultAssetsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultAssetsOutputReference">DataCloudflareWorkerVersionsResultAssetsOutputReference</a>

---

##### `bindings`<sup>Required</sup> <a name="bindings" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.bindings"></a>

```typescript
public readonly bindings: DataCloudflareWorkerVersionsResultBindingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultBindingsList">DataCloudflareWorkerVersionsResultBindingsList</a>

---

##### `compatibilityDate`<sup>Required</sup> <a name="compatibilityDate" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityDate"></a>

```typescript
public readonly compatibilityDate: string;
```

- *Type:* string

---

##### `compatibilityFlags`<sup>Required</sup> <a name="compatibilityFlags" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.compatibilityFlags"></a>

```typescript
public readonly compatibilityFlags: string[];
```

- *Type:* string[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.limits"></a>

```typescript
public readonly limits: DataCloudflareWorkerVersionsResultLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultLimitsOutputReference">DataCloudflareWorkerVersionsResultLimitsOutputReference</a>

---

##### `mainModule`<sup>Required</sup> <a name="mainModule" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.mainModule"></a>

```typescript
public readonly mainModule: string;
```

- *Type:* string

---

##### `migrations`<sup>Required</sup> <a name="migrations" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.migrations"></a>

```typescript
public readonly migrations: DataCloudflareWorkerVersionsResultMigrationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultMigrationsOutputReference">DataCloudflareWorkerVersionsResultMigrationsOutputReference</a>

---

##### `modules`<sup>Required</sup> <a name="modules" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.modules"></a>

```typescript
public readonly modules: DataCloudflareWorkerVersionsResultModulesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultModulesList">DataCloudflareWorkerVersionsResultModulesList</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.placement"></a>

```typescript
public readonly placement: DataCloudflareWorkerVersionsResultPlacementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference">DataCloudflareWorkerVersionsResultPlacementOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `usageModel`<sup>Required</sup> <a name="usageModel" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.usageModel"></a>

```typescript
public readonly usageModel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResult">DataCloudflareWorkerVersionsResult</a>

---


### DataCloudflareWorkerVersionsResultPlacementOutputReference <a name="DataCloudflareWorkerVersionsResultPlacementOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkerVersions } from '@cdktf/provider-cloudflare'

new dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareWorkerVersionsResultPlacement;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareWorkerVersions.DataCloudflareWorkerVersionsResultPlacement">DataCloudflareWorkerVersionsResultPlacement</a>

---



