# `dataCloudflareMagicTransitSiteLans` Submodule <a name="`dataCloudflareMagicTransitSiteLans` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteLans <a name="DataCloudflareMagicTransitSiteLans" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_transit_site_lans cloudflare_magic_transit_site_lans}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteLansConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig">DataCloudflareMagicTransitSiteLansConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig">DataCloudflareMagicTransitSiteLansConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLans resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isConstruct"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteLans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteLans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitSiteLans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_transit_site_lans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteLans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList">DataCloudflareMagicTransitSiteLansResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.result"></a>

```typescript
public readonly result: DataCloudflareMagicTransitSiteLansResultList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList">DataCloudflareMagicTransitSiteLansResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLans.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteLansConfig <a name="DataCloudflareMagicTransitSiteLansConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansConfig: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.siteId">siteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_transit_site_lans#account_id DataCloudflareMagicTransitSiteLans#account_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_transit_site_lans#site_id DataCloudflareMagicTransitSiteLans#site_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/magic_transit_site_lans#max_items DataCloudflareMagicTransitSiteLans#max_items}

---

### DataCloudflareMagicTransitSiteLansResult <a name="DataCloudflareMagicTransitSiteLansResult" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResult.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResult: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResult = { ... }
```


### DataCloudflareMagicTransitSiteLansResultNat <a name="DataCloudflareMagicTransitSiteLansResultNat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNat.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResultNat: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNat = { ... }
```


### DataCloudflareMagicTransitSiteLansResultRoutedSubnets <a name="DataCloudflareMagicTransitSiteLansResultRoutedSubnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnets.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResultRoutedSubnets: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnets = { ... }
```


### DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat <a name="DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat = { ... }
```


### DataCloudflareMagicTransitSiteLansResultStaticAddressing <a name="DataCloudflareMagicTransitSiteLansResultStaticAddressing" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressing.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResultStaticAddressing: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressing = { ... }
```


### DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay <a name="DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay = { ... }
```


### DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer <a name="DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer: dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteLansResultList <a name="DataCloudflareMagicTransitSiteLansResultList" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.get"></a>

```typescript
public get(index: number): DataCloudflareMagicTransitSiteLansResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareMagicTransitSiteLansResultNatOutputReference <a name="DataCloudflareMagicTransitSiteLansResultNatOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNat">DataCloudflareMagicTransitSiteLansResultNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.staticPrefix"></a>

```typescript
public readonly staticPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResultNat;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNat">DataCloudflareMagicTransitSiteLansResultNat</a>

---


### DataCloudflareMagicTransitSiteLansResultOutputReference <a name="DataCloudflareMagicTransitSiteLansResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.haLink">haLink</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference">DataCloudflareMagicTransitSiteLansResultNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.physport">physport</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.routedSubnets">routedSubnets</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList">DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.staticAddressing">staticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference">DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.vlanTag">vlanTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResult">DataCloudflareMagicTransitSiteLansResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `haLink`<sup>Required</sup> <a name="haLink" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.haLink"></a>

```typescript
public readonly haLink: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.nat"></a>

```typescript
public readonly nat: DataCloudflareMagicTransitSiteLansResultNatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultNatOutputReference">DataCloudflareMagicTransitSiteLansResultNatOutputReference</a>

---

##### `physport`<sup>Required</sup> <a name="physport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.physport"></a>

```typescript
public readonly physport: number;
```

- *Type:* number

---

##### `routedSubnets`<sup>Required</sup> <a name="routedSubnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.routedSubnets"></a>

```typescript
public readonly routedSubnets: DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList">DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList</a>

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

##### `staticAddressing`<sup>Required</sup> <a name="staticAddressing" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.staticAddressing"></a>

```typescript
public readonly staticAddressing: DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference">DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference</a>

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.vlanTag"></a>

```typescript
public readonly vlanTag: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResult;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResult">DataCloudflareMagicTransitSiteLansResult</a>

---


### DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList <a name="DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.get"></a>

```typescript
public get(index: number): DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference <a name="DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.staticPrefix">staticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat">DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `staticPrefix`<sup>Required</sup> <a name="staticPrefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```typescript
public readonly staticPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat">DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNat</a>

---


### DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference <a name="DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.nat">nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference">DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.nextHop">nextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnets">DataCloudflareMagicTransitSiteLansResultRoutedSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.nat"></a>

```typescript
public readonly nat: DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference">DataCloudflareMagicTransitSiteLansResultRoutedSubnetsNatOutputReference</a>

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResultRoutedSubnets;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultRoutedSubnets">DataCloudflareMagicTransitSiteLansResultRoutedSubnets</a>

---


### DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference <a name="DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.serverAddresses">serverAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverAddresses`<sup>Required</sup> <a name="serverAddresses" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```typescript
public readonly serverAddresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelay</a>

---


### DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference <a name="DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">dhcpPoolEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">dhcpPoolStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dnsServer">dnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.reservations">reservations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhcpPoolEnd`<sup>Required</sup> <a name="dhcpPoolEnd" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```typescript
public readonly dhcpPoolEnd: string;
```

- *Type:* string

---

##### `dhcpPoolStart`<sup>Required</sup> <a name="dhcpPoolStart" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```typescript
public readonly dhcpPoolStart: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string;
```

- *Type:* string

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]

---

##### `reservations`<sup>Required</sup> <a name="reservations" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```typescript
public readonly reservations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServer</a>

---


### DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference <a name="DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteLans } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.dhcpRelay">dhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.dhcpServer">dhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.secondaryAddress">secondaryAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.virtualAddress">virtualAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressing">DataCloudflareMagicTransitSiteLansResultStaticAddressing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `dhcpRelay`<sup>Required</sup> <a name="dhcpRelay" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.dhcpRelay"></a>

```typescript
public readonly dhcpRelay: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpRelayOutputReference</a>

---

##### `dhcpServer`<sup>Required</sup> <a name="dhcpServer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.dhcpServer"></a>

```typescript
public readonly dhcpServer: DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference">DataCloudflareMagicTransitSiteLansResultStaticAddressingDhcpServerOutputReference</a>

---

##### `secondaryAddress`<sup>Required</sup> <a name="secondaryAddress" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.secondaryAddress"></a>

```typescript
public readonly secondaryAddress: string;
```

- *Type:* string

---

##### `virtualAddress`<sup>Required</sup> <a name="virtualAddress" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.virtualAddress"></a>

```typescript
public readonly virtualAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteLansResultStaticAddressing;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteLans.DataCloudflareMagicTransitSiteLansResultStaticAddressing">DataCloudflareMagicTransitSiteLansResultStaticAddressing</a>

---



