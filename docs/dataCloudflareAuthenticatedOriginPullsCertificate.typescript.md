# `dataCloudflareAuthenticatedOriginPullsCertificate` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsCertificate` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificate <a name="DataCloudflareAuthenticatedOriginPullsCertificate" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/authenticated_origin_pulls_certificate cloudflare_authenticated_origin_pulls_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

new dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate(scope: Construct, id: string, config: DataCloudflareAuthenticatedOriginPullsCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig">DataCloudflareAuthenticatedOriginPullsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig">DataCloudflareAuthenticatedOriginPullsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isConstruct"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformElement"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformDataSource"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareAuthenticatedOriginPullsCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareAuthenticatedOriginPullsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/authenticated_origin_pulls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.expiresOn">expiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.signature">signature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.uploadedOn">uploadedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.expiresOn"></a>

```typescript
public readonly expiresOn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.signature"></a>

```typescript
public readonly signature: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.uploadedOn"></a>

```typescript
public readonly uploadedOn: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsCertificateConfig <a name="DataCloudflareAuthenticatedOriginPullsCertificateConfig" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.Initializer"></a>

```typescript
import { dataCloudflareAuthenticatedOriginPullsCertificate } from '@cdktf/provider-cloudflare'

const dataCloudflareAuthenticatedOriginPullsCertificateConfig: dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.certificateId">certificateId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/authenticated_origin_pulls_certificate#certificate_id DataCloudflareAuthenticatedOriginPullsCertificate#certificate_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsCertificate.DataCloudflareAuthenticatedOriginPullsCertificateConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/authenticated_origin_pulls_certificate#zone_id DataCloudflareAuthenticatedOriginPullsCertificate#zone_id}

---



