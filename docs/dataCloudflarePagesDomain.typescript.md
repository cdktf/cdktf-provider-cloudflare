# `dataCloudflarePagesDomain` Submodule <a name="`dataCloudflarePagesDomain` Submodule" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePagesDomain <a name="DataCloudflarePagesDomain" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_domain cloudflare_pages_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

new dataCloudflarePagesDomain.DataCloudflarePagesDomain(scope: Construct, id: string, config: DataCloudflarePagesDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig">DataCloudflarePagesDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig">DataCloudflarePagesDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflarePagesDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isConstruct"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

dataCloudflarePagesDomain.DataCloudflarePagesDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformElement"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformDataSource"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflarePagesDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePagesDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePagesDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflarePagesDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.validationData">validationData</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference">DataCloudflarePagesDomainValidationDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.verificationData">verificationData</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference">DataCloudflarePagesDomainVerificationDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.zoneTag">zoneTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `validationData`<sup>Required</sup> <a name="validationData" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.validationData"></a>

```typescript
public readonly validationData: DataCloudflarePagesDomainValidationDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference">DataCloudflarePagesDomainValidationDataOutputReference</a>

---

##### `verificationData`<sup>Required</sup> <a name="verificationData" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.verificationData"></a>

```typescript
public readonly verificationData: DataCloudflarePagesDomainVerificationDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference">DataCloudflarePagesDomainVerificationDataOutputReference</a>

---

##### `zoneTag`<sup>Required</sup> <a name="zoneTag" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.zoneTag"></a>

```typescript
public readonly zoneTag: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePagesDomainConfig <a name="DataCloudflarePagesDomainConfig" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.Initializer"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

const dataCloudflarePagesDomainConfig: dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | The domain name. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.projectName">projectName</a></code> | <code>string</code> | Name of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_domain#account_id DataCloudflarePagesDomain#account_id}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_domain#domain_name DataCloudflarePagesDomain#domain_name}

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Name of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/data-sources/pages_domain#project_name DataCloudflarePagesDomain#project_name}

---

### DataCloudflarePagesDomainValidationData <a name="DataCloudflarePagesDomainValidationData" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationData.Initializer"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

const dataCloudflarePagesDomainValidationData: dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationData = { ... }
```


### DataCloudflarePagesDomainVerificationData <a name="DataCloudflarePagesDomainVerificationData" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationData.Initializer"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

const dataCloudflarePagesDomainVerificationData: dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationData = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflarePagesDomainValidationDataOutputReference <a name="DataCloudflarePagesDomainValidationDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

new dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.txtName">txtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.txtValue">txtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationData">DataCloudflarePagesDomainValidationData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `txtName`<sup>Required</sup> <a name="txtName" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.txtName"></a>

```typescript
public readonly txtName: string;
```

- *Type:* string

---

##### `txtValue`<sup>Required</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.txtValue"></a>

```typescript
public readonly txtValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePagesDomainValidationData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainValidationData">DataCloudflarePagesDomainValidationData</a>

---


### DataCloudflarePagesDomainVerificationDataOutputReference <a name="DataCloudflarePagesDomainVerificationDataOutputReference" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.Initializer"></a>

```typescript
import { dataCloudflarePagesDomain } from '@cdktf/provider-cloudflare'

new dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationData">DataCloudflarePagesDomainVerificationData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflarePagesDomainVerificationData;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflarePagesDomain.DataCloudflarePagesDomainVerificationData">DataCloudflarePagesDomainVerificationData</a>

---



