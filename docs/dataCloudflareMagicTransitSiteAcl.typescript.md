# `dataCloudflareMagicTransitSiteAcl` Submodule <a name="`dataCloudflareMagicTransitSiteAcl` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteAcl <a name="DataCloudflareMagicTransitSiteAcl" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acl cloudflare_magic_transit_site_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl(scope: Construct, id: string, config: DataCloudflareMagicTransitSiteAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig">DataCloudflareMagicTransitSiteAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig">DataCloudflareMagicTransitSiteAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetAclId">resetAclId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAclId` <a name="resetAclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.resetAclId"></a>

```typescript
public resetAclId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareMagicTransitSiteAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicTransitSiteAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally">forwardLocally</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1">lan1</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2">lan2</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional">unidirectional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput">aclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput">siteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId">aclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId">siteId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forwardLocally`<sup>Required</sup> <a name="forwardLocally" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.forwardLocally"></a>

```typescript
public readonly forwardLocally: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lan1`<sup>Required</sup> <a name="lan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan1"></a>

```typescript
public readonly lan1: DataCloudflareMagicTransitSiteAclLan1OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference">DataCloudflareMagicTransitSiteAclLan1OutputReference</a>

---

##### `lan2`<sup>Required</sup> <a name="lan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.lan2"></a>

```typescript
public readonly lan2: DataCloudflareMagicTransitSiteAclLan2OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference">DataCloudflareMagicTransitSiteAclLan2OutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `unidirectional`<sup>Required</sup> <a name="unidirectional" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.unidirectional"></a>

```typescript
public readonly unidirectional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `aclIdInput`<sup>Optional</sup> <a name="aclIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclIdInput"></a>

```typescript
public readonly aclIdInput: string;
```

- *Type:* string

---

##### `siteIdInput`<sup>Optional</sup> <a name="siteIdInput" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteIdInput"></a>

```typescript
public readonly siteIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteAclConfig <a name="DataCloudflareMagicTransitSiteAclConfig" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteAclConfig: dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId">siteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId">aclId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acl#account_id DataCloudflareMagicTransitSiteAcl#account_id}

---

##### `siteId`<sup>Required</sup> <a name="siteId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.siteId"></a>

```typescript
public readonly siteId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acl#site_id DataCloudflareMagicTransitSiteAcl#site_id}

---

##### `aclId`<sup>Optional</sup> <a name="aclId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclConfig.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/data-sources/magic_transit_site_acl#acl_id DataCloudflareMagicTransitSiteAcl#acl_id}

---

### DataCloudflareMagicTransitSiteAclLan1 <a name="DataCloudflareMagicTransitSiteAclLan1" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteAclLan1: dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1 = { ... }
```


### DataCloudflareMagicTransitSiteAclLan2 <a name="DataCloudflareMagicTransitSiteAclLan2" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

const dataCloudflareMagicTransitSiteAclLan2: dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2 = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteAclLan1OutputReference <a name="DataCloudflareMagicTransitSiteAclLan1OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName">lanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteAclLan1;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan1">DataCloudflareMagicTransitSiteAclLan1</a>

---


### DataCloudflareMagicTransitSiteAclLan2OutputReference <a name="DataCloudflareMagicTransitSiteAclLan2OutputReference" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer"></a>

```typescript
import { dataCloudflareMagicTransitSiteAcl } from '@cdktf/provider-cloudflare'

new dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName">lanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges">portRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `lanName`<sup>Required</sup> <a name="lanName" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.lanName"></a>

```typescript
public readonly lanName: string;
```

- *Type:* string

---

##### `portRanges`<sup>Required</sup> <a name="portRanges" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.portRanges"></a>

```typescript
public readonly portRanges: string[];
```

- *Type:* string[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareMagicTransitSiteAclLan2;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareMagicTransitSiteAcl.DataCloudflareMagicTransitSiteAclLan2">DataCloudflareMagicTransitSiteAclLan2</a>

---



