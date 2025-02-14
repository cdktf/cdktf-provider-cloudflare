# `dataCloudflareEmailSecurityTrustedDomains` Submodule <a name="`dataCloudflareEmailSecurityTrustedDomains` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityTrustedDomains <a name="DataCloudflareEmailSecurityTrustedDomains" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains cloudflare_email_security_trusted_domains}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains(scope: Construct, id: string, config: DataCloudflareEmailSecurityTrustedDomainsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig">DataCloudflareEmailSecurityTrustedDomainsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig">DataCloudflareEmailSecurityTrustedDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.resetTrustedDomainId">resetTrustedDomainId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareEmailSecurityTrustedDomainsFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetTrustedDomainId` <a name="resetTrustedDomainId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.resetTrustedDomainId"></a>

```typescript
public resetTrustedDomainId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isConstruct"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityTrustedDomains to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityTrustedDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityTrustedDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference">DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.isRecent">isRecent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.isRegex">isRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.isSimilarity">isSimilarity</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.trustedDomainIdInput">trustedDomainIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.trustedDomainId">trustedDomainId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference">DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.isRecent"></a>

```typescript
public readonly isRecent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.isRegex"></a>

```typescript
public readonly isRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareEmailSecurityTrustedDomainsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a>

---

##### `trustedDomainIdInput`<sup>Optional</sup> <a name="trustedDomainIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.trustedDomainIdInput"></a>

```typescript
public readonly trustedDomainIdInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `trustedDomainId`<sup>Required</sup> <a name="trustedDomainId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.trustedDomainId"></a>

```typescript
public readonly trustedDomainId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomains.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityTrustedDomainsConfig <a name="DataCloudflareEmailSecurityTrustedDomainsConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailSecurityTrustedDomainsConfig: dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.accountId">accountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#filter DataCloudflareEmailSecurityTrustedDomains#filter}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.trustedDomainId">trustedDomainId</a></code> | <code>number</code> | The unique identifier for the trusted domain. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#account_id DataCloudflareEmailSecurityTrustedDomains#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityTrustedDomainsFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#filter DataCloudflareEmailSecurityTrustedDomains#filter}.

---

##### `trustedDomainId`<sup>Optional</sup> <a name="trustedDomainId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsConfig.property.trustedDomainId"></a>

```typescript
public readonly trustedDomainId: number;
```

- *Type:* number

The unique identifier for the trusted domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#trusted_domain_id DataCloudflareEmailSecurityTrustedDomains#trusted_domain_id}

---

### DataCloudflareEmailSecurityTrustedDomainsFilter <a name="DataCloudflareEmailSecurityTrustedDomainsFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailSecurityTrustedDomainsFilter: dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.direction">direction</a></code> | <code>string</code> | The sorting direction. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.isRecent">isRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#is_recent DataCloudflareEmailSecurityTrustedDomains#is_recent}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.isSimilarity">isSimilarity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#is_similarity DataCloudflareEmailSecurityTrustedDomains#is_similarity}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.order">order</a></code> | <code>string</code> | The field to sort by. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.search">search</a></code> | <code>string</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sorting direction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#direction DataCloudflareEmailSecurityTrustedDomains#direction}

---

##### `isRecent`<sup>Optional</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.isRecent"></a>

```typescript
public readonly isRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#is_recent DataCloudflareEmailSecurityTrustedDomains#is_recent}.

---

##### `isSimilarity`<sup>Optional</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#is_similarity DataCloudflareEmailSecurityTrustedDomains#is_similarity}.

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The field to sort by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#order DataCloudflareEmailSecurityTrustedDomains#order}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/data-sources/email_security_trusted_domains#search DataCloudflareEmailSecurityTrustedDomains#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference <a name="DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityTrustedDomains } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetIsRecent">resetIsRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetIsSimilarity">resetIsSimilarity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetIsRecent` <a name="resetIsRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetIsRecent"></a>

```typescript
public resetIsRecent(): void
```

##### `resetIsSimilarity` <a name="resetIsSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetIsSimilarity"></a>

```typescript
public resetIsSimilarity(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isRecentInput">isRecentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isSimilarityInput">isSimilarityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isRecent">isRecent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isSimilarity">isSimilarity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `isRecentInput`<sup>Optional</sup> <a name="isRecentInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isRecentInput"></a>

```typescript
public readonly isRecentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSimilarityInput`<sup>Optional</sup> <a name="isSimilarityInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isSimilarityInput"></a>

```typescript
public readonly isSimilarityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `isRecent`<sup>Required</sup> <a name="isRecent" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isRecent"></a>

```typescript
public readonly isRecent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSimilarity`<sup>Required</sup> <a name="isSimilarity" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.isSimilarity"></a>

```typescript
public readonly isSimilarity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareEmailSecurityTrustedDomainsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityTrustedDomains.DataCloudflareEmailSecurityTrustedDomainsFilter">DataCloudflareEmailSecurityTrustedDomainsFilter</a>

---



