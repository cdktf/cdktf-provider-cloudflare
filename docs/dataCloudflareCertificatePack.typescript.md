# `dataCloudflareCertificatePack` Submodule <a name="`dataCloudflareCertificatePack` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCertificatePack <a name="DataCloudflareCertificatePack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack cloudflare_certificate_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePack(scope: Construct, id: string, config: DataCloudflareCertificatePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig">DataCloudflareCertificatePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig">DataCloudflareCertificatePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetCertificatePackId">resetCertificatePackId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareCertificatePackFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

---

##### `resetCertificatePackId` <a name="resetCertificatePackId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetCertificatePackId"></a>

```typescript
public resetCertificatePackId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareCertificatePack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareCertificatePack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareCertificatePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareCertificatePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareCertificatePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList">DataCloudflareCertificatePackCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cloudflareBranding">cloudflareBranding</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference">DataCloudflareCertificatePackFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.primaryCertificate">primaryCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationErrors">validationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList">DataCloudflareCertificatePackValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationMethod">validationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationRecords">validationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList">DataCloudflareCertificatePackValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validityDays">validityDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackIdInput">certificatePackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackId">certificatePackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificates"></a>

```typescript
public readonly certificates: DataCloudflareCertificatePackCertificatesList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList">DataCloudflareCertificatePackCertificatesList</a>

---

##### `cloudflareBranding`<sup>Required</sup> <a name="cloudflareBranding" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.cloudflareBranding"></a>

```typescript
public readonly cloudflareBranding: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filter"></a>

```typescript
public readonly filter: DataCloudflareCertificatePackFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference">DataCloudflareCertificatePackFilterOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `primaryCertificate`<sup>Required</sup> <a name="primaryCertificate" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.primaryCertificate"></a>

```typescript
public readonly primaryCertificate: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationErrors`<sup>Required</sup> <a name="validationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationErrors"></a>

```typescript
public readonly validationErrors: DataCloudflareCertificatePackValidationErrorsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList">DataCloudflareCertificatePackValidationErrorsList</a>

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

---

##### `validationRecords`<sup>Required</sup> <a name="validationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validationRecords"></a>

```typescript
public readonly validationRecords: DataCloudflareCertificatePackValidationRecordsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList">DataCloudflareCertificatePackValidationRecordsList</a>

---

##### `validityDays`<sup>Required</sup> <a name="validityDays" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.validityDays"></a>

```typescript
public readonly validityDays: number;
```

- *Type:* number

---

##### `certificatePackIdInput`<sup>Optional</sup> <a name="certificatePackIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackIdInput"></a>

```typescript
public readonly certificatePackIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareCertificatePackFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificatePackId`<sup>Required</sup> <a name="certificatePackId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.certificatePackId"></a>

```typescript
public readonly certificatePackId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCertificatePackCertificates <a name="DataCloudflareCertificatePackCertificates" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

const dataCloudflareCertificatePackCertificates: dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates = { ... }
```


### DataCloudflareCertificatePackCertificatesGeoRestrictions <a name="DataCloudflareCertificatePackCertificatesGeoRestrictions" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

const dataCloudflareCertificatePackCertificatesGeoRestrictions: dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions = { ... }
```


### DataCloudflareCertificatePackConfig <a name="DataCloudflareCertificatePackConfig" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

const dataCloudflareCertificatePackConfig: dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.certificatePackId">certificatePackId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#zone_id DataCloudflareCertificatePack#zone_id}

---

##### `certificatePackId`<sup>Optional</sup> <a name="certificatePackId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.certificatePackId"></a>

```typescript
public readonly certificatePackId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#certificate_pack_id DataCloudflareCertificatePack#certificate_pack_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareCertificatePackFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#filter DataCloudflareCertificatePack#filter}.

---

### DataCloudflareCertificatePackFilter <a name="DataCloudflareCertificatePackFilter" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

const dataCloudflareCertificatePackFilter: dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter.property.status">status</a></code> | <code>string</code> | Include Certificate Packs of all statuses, not just active ones. Available values: "all". |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Include Certificate Packs of all statuses, not just active ones. Available values: "all".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/certificate_pack#status DataCloudflareCertificatePack#status}

---

### DataCloudflareCertificatePackValidationErrors <a name="DataCloudflareCertificatePackValidationErrors" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

const dataCloudflareCertificatePackValidationErrors: dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors = { ... }
```


### DataCloudflareCertificatePackValidationRecords <a name="DataCloudflareCertificatePackValidationRecords" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

const dataCloudflareCertificatePackValidationRecords: dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference <a name="DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions">DataCloudflareCertificatePackCertificatesGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCertificatePackCertificatesGeoRestrictions;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictions">DataCloudflareCertificatePackCertificatesGeoRestrictions</a>

---


### DataCloudflareCertificatePackCertificatesList <a name="DataCloudflareCertificatePackCertificatesList" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.get"></a>

```typescript
public get(index: number): DataCloudflareCertificatePackCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCertificatePackCertificatesOutputReference <a name="DataCloudflareCertificatePackCertificatesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.bundleMethod">bundleMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference">DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates">DataCloudflareCertificatePackCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bundleMethod`<sup>Required</sup> <a name="bundleMethod" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.bundleMethod"></a>

```typescript
public readonly bundleMethod: string;
```

- *Type:* string

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference">DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCertificatePackCertificates;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackCertificates">DataCloudflareCertificatePackCertificates</a>

---


### DataCloudflareCertificatePackFilterOutputReference <a name="DataCloudflareCertificatePackFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareCertificatePackFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackFilter">DataCloudflareCertificatePackFilter</a>

---


### DataCloudflareCertificatePackValidationErrorsList <a name="DataCloudflareCertificatePackValidationErrorsList" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.get"></a>

```typescript
public get(index: number): DataCloudflareCertificatePackValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCertificatePackValidationErrorsOutputReference <a name="DataCloudflareCertificatePackValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors">DataCloudflareCertificatePackValidationErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCertificatePackValidationErrors;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationErrors">DataCloudflareCertificatePackValidationErrors</a>

---


### DataCloudflareCertificatePackValidationRecordsList <a name="DataCloudflareCertificatePackValidationRecordsList" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.get"></a>

```typescript
public get(index: number): DataCloudflareCertificatePackValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareCertificatePackValidationRecordsOutputReference <a name="DataCloudflareCertificatePackValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareCertificatePack } from '@cdktf/provider-cloudflare'

new dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.emails">emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpBody">httpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtName">txtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtValue">txtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords">DataCloudflareCertificatePackValidationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `txtName`<sup>Required</sup> <a name="txtName" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtName"></a>

```typescript
public readonly txtName: string;
```

- *Type:* string

---

##### `txtValue`<sup>Required</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.txtValue"></a>

```typescript
public readonly txtValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareCertificatePackValidationRecords;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareCertificatePack.DataCloudflareCertificatePackValidationRecords">DataCloudflareCertificatePackValidationRecords</a>

---



