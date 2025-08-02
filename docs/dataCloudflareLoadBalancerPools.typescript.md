# `dataCloudflareLoadBalancerPools` Submodule <a name="`dataCloudflareLoadBalancerPools` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareLoadBalancerPools <a name="DataCloudflareLoadBalancerPools" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/load_balancer_pools cloudflare_load_balancer_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools(scope: Construct, id: string, config: DataCloudflareLoadBalancerPoolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig">DataCloudflareLoadBalancerPoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig">DataCloudflareLoadBalancerPoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetMonitor">resetMonitor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareLoadBalancerPools resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareLoadBalancerPools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareLoadBalancerPools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareLoadBalancerPools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/load_balancer_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareLoadBalancerPools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList">DataCloudflareLoadBalancerPoolsResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.monitorInput">monitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.monitor">monitor</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.result"></a>

```typescript
public readonly result: DataCloudflareLoadBalancerPoolsResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList">DataCloudflareLoadBalancerPoolsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.monitorInput"></a>

```typescript
public readonly monitorInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareLoadBalancerPoolsConfig <a name="DataCloudflareLoadBalancerPoolsConfig" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsConfig: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.monitor">monitor</a></code> | <code>string</code> | The ID of the Monitor to use for checking the health of origins within this pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/load_balancer_pools#account_id DataCloudflareLoadBalancerPools#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/load_balancer_pools#max_items DataCloudflareLoadBalancerPools#max_items}

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsConfig.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/data-sources/load_balancer_pools#monitor DataCloudflareLoadBalancerPools#monitor}

---

### DataCloudflareLoadBalancerPoolsResult <a name="DataCloudflareLoadBalancerPoolsResult" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResult.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResult: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResult = { ... }
```


### DataCloudflareLoadBalancerPoolsResultLoadShedding <a name="DataCloudflareLoadBalancerPoolsResultLoadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadShedding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadShedding.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultLoadShedding: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadShedding = { ... }
```


### DataCloudflareLoadBalancerPoolsResultNotificationFilter <a name="DataCloudflareLoadBalancerPoolsResultNotificationFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilter.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultNotificationFilter: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilter = { ... }
```


### DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin <a name="DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin = { ... }
```


### DataCloudflareLoadBalancerPoolsResultNotificationFilterPool <a name="DataCloudflareLoadBalancerPoolsResultNotificationFilterPool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPool.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultNotificationFilterPool: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPool = { ... }
```


### DataCloudflareLoadBalancerPoolsResultOrigins <a name="DataCloudflareLoadBalancerPoolsResultOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOrigins.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultOrigins: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOrigins = { ... }
```


### DataCloudflareLoadBalancerPoolsResultOriginsHeader <a name="DataCloudflareLoadBalancerPoolsResultOriginsHeader" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeader.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultOriginsHeader: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeader = { ... }
```


### DataCloudflareLoadBalancerPoolsResultOriginSteering <a name="DataCloudflareLoadBalancerPoolsResultOriginSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteering"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteering.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

const dataCloudflareLoadBalancerPoolsResultOriginSteering: dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteering = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareLoadBalancerPoolsResultList <a name="DataCloudflareLoadBalancerPoolsResultList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancerPoolsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference <a name="DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.defaultPercent">defaultPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.defaultPolicy">defaultPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.sessionPercent">sessionPercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadShedding">DataCloudflareLoadBalancerPoolsResultLoadShedding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPercent`<sup>Required</sup> <a name="defaultPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.defaultPercent"></a>

```typescript
public readonly defaultPercent: number;
```

- *Type:* number

---

##### `defaultPolicy`<sup>Required</sup> <a name="defaultPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.defaultPolicy"></a>

```typescript
public readonly defaultPolicy: string;
```

- *Type:* string

---

##### `sessionPercent`<sup>Required</sup> <a name="sessionPercent" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.sessionPercent"></a>

```typescript
public readonly sessionPercent: number;
```

- *Type:* number

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultLoadShedding;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadShedding">DataCloudflareLoadBalancerPoolsResultLoadShedding</a>

---


### DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference <a name="DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.disable">disable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin">DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.disable"></a>

```typescript
public readonly disable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.healthy"></a>

```typescript
public readonly healthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin">DataCloudflareLoadBalancerPoolsResultNotificationFilterOrigin</a>

---


### DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference <a name="DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference">DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.pool">pool</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference">DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilter">DataCloudflareLoadBalancerPoolsResultNotificationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.origin"></a>

```typescript
public readonly origin: DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference">DataCloudflareLoadBalancerPoolsResultNotificationFilterOriginOutputReference</a>

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.pool"></a>

```typescript
public readonly pool: DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference">DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultNotificationFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilter">DataCloudflareLoadBalancerPoolsResultNotificationFilter</a>

---


### DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference <a name="DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.disable">disable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.healthy">healthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPool">DataCloudflareLoadBalancerPoolsResultNotificationFilterPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.disable"></a>

```typescript
public readonly disable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.healthy"></a>

```typescript
public readonly healthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultNotificationFilterPool;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterPool">DataCloudflareLoadBalancerPoolsResultNotificationFilterPool</a>

---


### DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference <a name="DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.host">host</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeader">DataCloudflareLoadBalancerPoolsResultOriginsHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.host"></a>

```typescript
public readonly host: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultOriginsHeader;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeader">DataCloudflareLoadBalancerPoolsResultOriginsHeader</a>

---


### DataCloudflareLoadBalancerPoolsResultOriginsList <a name="DataCloudflareLoadBalancerPoolsResultOriginsList" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.get"></a>

```typescript
public get(index: number): DataCloudflareLoadBalancerPoolsResultOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareLoadBalancerPoolsResultOriginsOutputReference <a name="DataCloudflareLoadBalancerPoolsResultOriginsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.disabledAt">disabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference">DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.virtualNetworkId">virtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOrigins">DataCloudflareLoadBalancerPoolsResultOrigins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.disabledAt"></a>

```typescript
public readonly disabledAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.header"></a>

```typescript
public readonly header: DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference">DataCloudflareLoadBalancerPoolsResultOriginsHeaderOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultOrigins;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOrigins">DataCloudflareLoadBalancerPoolsResultOrigins</a>

---


### DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference <a name="DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteering">DataCloudflareLoadBalancerPoolsResultOriginSteering</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResultOriginSteering;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteering">DataCloudflareLoadBalancerPoolsResultOriginSteering</a>

---


### DataCloudflareLoadBalancerPoolsResultOutputReference <a name="DataCloudflareLoadBalancerPoolsResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareLoadBalancerPools } from '@cdktf/provider-cloudflare'

new dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.checkRegions">checkRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.disabledAt">disabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.latitude">latitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.loadShedding">loadShedding</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference">DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.longitude">longitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.minimumOrigins">minimumOrigins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.monitor">monitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.networks">networks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.notificationEmail">notificationEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.notificationFilter">notificationFilter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference">DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.origins">origins</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList">DataCloudflareLoadBalancerPoolsResultOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.originSteering">originSteering</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference">DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResult">DataCloudflareLoadBalancerPoolsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkRegions`<sup>Required</sup> <a name="checkRegions" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.checkRegions"></a>

```typescript
public readonly checkRegions: string[];
```

- *Type:* string[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.disabledAt"></a>

```typescript
public readonly disabledAt: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

---

##### `loadShedding`<sup>Required</sup> <a name="loadShedding" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.loadShedding"></a>

```typescript
public readonly loadShedding: DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference">DataCloudflareLoadBalancerPoolsResultLoadSheddingOutputReference</a>

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

---

##### `minimumOrigins`<sup>Required</sup> <a name="minimumOrigins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.minimumOrigins"></a>

```typescript
public readonly minimumOrigins: number;
```

- *Type:* number

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.monitor"></a>

```typescript
public readonly monitor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.networks"></a>

```typescript
public readonly networks: string[];
```

- *Type:* string[]

---

##### `notificationEmail`<sup>Required</sup> <a name="notificationEmail" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.notificationEmail"></a>

```typescript
public readonly notificationEmail: string;
```

- *Type:* string

---

##### `notificationFilter`<sup>Required</sup> <a name="notificationFilter" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.notificationFilter"></a>

```typescript
public readonly notificationFilter: DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference">DataCloudflareLoadBalancerPoolsResultNotificationFilterOutputReference</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.origins"></a>

```typescript
public readonly origins: DataCloudflareLoadBalancerPoolsResultOriginsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginsList">DataCloudflareLoadBalancerPoolsResultOriginsList</a>

---

##### `originSteering`<sup>Required</sup> <a name="originSteering" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.originSteering"></a>

```typescript
public readonly originSteering: DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference">DataCloudflareLoadBalancerPoolsResultOriginSteeringOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareLoadBalancerPoolsResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareLoadBalancerPools.DataCloudflareLoadBalancerPoolsResult">DataCloudflareLoadBalancerPoolsResult</a>

---



