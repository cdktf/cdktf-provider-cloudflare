# `dataCloudflareSpectrumApplication` Submodule <a name="`dataCloudflareSpectrumApplication` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSpectrumApplication <a name="DataCloudflareSpectrumApplication" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/spectrum_application cloudflare_spectrum_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

new dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication(scope: Construct, id: string, config: DataCloudflareSpectrumApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig">DataCloudflareSpectrumApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig">DataCloudflareSpectrumApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareSpectrumApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareSpectrumApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareSpectrumApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareSpectrumApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/spectrum_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareSpectrumApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.argoSmartRouting">argoSmartRouting</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference">DataCloudflareSpectrumApplicationDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.edgeIps">edgeIps</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference">DataCloudflareSpectrumApplicationEdgeIpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.ipFirewall">ipFirewall</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.modifiedOn">modifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDirect">originDirect</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDns">originDns</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference">DataCloudflareSpectrumApplicationOriginDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originPort">originPort</a></code> | <code>cdktf.AnyMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.proxyProtocol">proxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tls">tls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.trafficType">trafficType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `argoSmartRouting`<sup>Required</sup> <a name="argoSmartRouting" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.argoSmartRouting"></a>

```typescript
public readonly argoSmartRouting: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.dns"></a>

```typescript
public readonly dns: DataCloudflareSpectrumApplicationDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference">DataCloudflareSpectrumApplicationDnsOutputReference</a>

---

##### `edgeIps`<sup>Required</sup> <a name="edgeIps" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.edgeIps"></a>

```typescript
public readonly edgeIps: DataCloudflareSpectrumApplicationEdgeIpsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference">DataCloudflareSpectrumApplicationEdgeIpsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipFirewall`<sup>Required</sup> <a name="ipFirewall" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.ipFirewall"></a>

```typescript
public readonly ipFirewall: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.modifiedOn"></a>

```typescript
public readonly modifiedOn: string;
```

- *Type:* string

---

##### `originDirect`<sup>Required</sup> <a name="originDirect" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDirect"></a>

```typescript
public readonly originDirect: string[];
```

- *Type:* string[]

---

##### `originDns`<sup>Required</sup> <a name="originDns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originDns"></a>

```typescript
public readonly originDns: DataCloudflareSpectrumApplicationOriginDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference">DataCloudflareSpectrumApplicationOriginDnsOutputReference</a>

---

##### `originPort`<sup>Required</sup> <a name="originPort" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.originPort"></a>

```typescript
public readonly originPort: AnyMap;
```

- *Type:* cdktf.AnyMap

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `proxyProtocol`<sup>Required</sup> <a name="proxyProtocol" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.proxyProtocol"></a>

```typescript
public readonly proxyProtocol: string;
```

- *Type:* string

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tls"></a>

```typescript
public readonly tls: string;
```

- *Type:* string

---

##### `trafficType`<sup>Required</sup> <a name="trafficType" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.trafficType"></a>

```typescript
public readonly trafficType: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSpectrumApplicationConfig <a name="DataCloudflareSpectrumApplicationConfig" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

const dataCloudflareSpectrumApplicationConfig: dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.appId">appId</a></code> | <code>string</code> | App identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Zone identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/spectrum_application#app_id DataCloudflareSpectrumApplication#app_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/spectrum_application#zone_id DataCloudflareSpectrumApplication#zone_id}

---

### DataCloudflareSpectrumApplicationDns <a name="DataCloudflareSpectrumApplicationDns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

const dataCloudflareSpectrumApplicationDns: dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns = { ... }
```


### DataCloudflareSpectrumApplicationEdgeIps <a name="DataCloudflareSpectrumApplicationEdgeIps" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

const dataCloudflareSpectrumApplicationEdgeIps: dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps = { ... }
```


### DataCloudflareSpectrumApplicationOriginDns <a name="DataCloudflareSpectrumApplicationOriginDns" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

const dataCloudflareSpectrumApplicationOriginDns: dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSpectrumApplicationDnsOutputReference <a name="DataCloudflareSpectrumApplicationDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

new dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns">DataCloudflareSpectrumApplicationDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareSpectrumApplicationDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationDns">DataCloudflareSpectrumApplicationDns</a>

---


### DataCloudflareSpectrumApplicationEdgeIpsOutputReference <a name="DataCloudflareSpectrumApplicationEdgeIpsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

new dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.connectivity">connectivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps">DataCloudflareSpectrumApplicationEdgeIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectivity`<sup>Required</sup> <a name="connectivity" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.connectivity"></a>

```typescript
public readonly connectivity: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareSpectrumApplicationEdgeIps;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationEdgeIps">DataCloudflareSpectrumApplicationEdgeIps</a>

---


### DataCloudflareSpectrumApplicationOriginDnsOutputReference <a name="DataCloudflareSpectrumApplicationOriginDnsOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareSpectrumApplication } from '@cdktf/provider-cloudflare'

new dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns">DataCloudflareSpectrumApplicationOriginDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareSpectrumApplicationOriginDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareSpectrumApplication.DataCloudflareSpectrumApplicationOriginDns">DataCloudflareSpectrumApplicationOriginDns</a>

---



