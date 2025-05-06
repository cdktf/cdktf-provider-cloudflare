# `dataCloudflareEmailSecurityImpersonationRegistry` Submodule <a name="`dataCloudflareEmailSecurityImpersonationRegistry` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareEmailSecurityImpersonationRegistry <a name="DataCloudflareEmailSecurityImpersonationRegistry" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry(scope: Construct, id: string, config: DataCloudflareEmailSecurityImpersonationRegistryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig">DataCloudflareEmailSecurityImpersonationRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig">DataCloudflareEmailSecurityImpersonationRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetDisplayNameId">resetDisplayNameId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareEmailSecurityImpersonationRegistryFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>

---

##### `resetDisplayNameId` <a name="resetDisplayNameId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetDisplayNameId"></a>

```typescript
public resetDisplayNameId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataCloudflareEmailSecurityImpersonationRegistry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareEmailSecurityImpersonationRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareEmailSecurityImpersonationRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareEmailSecurityImpersonationRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.comments">comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryId">directoryId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryNodeId">directoryNodeId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.externalDirectoryNodeId">externalDirectoryNodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference">DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.isEmailRegex">isEmailRegex</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provenance">provenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameIdInput">displayNameIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameId">displayNameId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.comments"></a>

```typescript
public readonly comments: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryId"></a>

```typescript
public readonly directoryId: number;
```

- *Type:* number

---

##### `directoryNodeId`<sup>Required</sup> <a name="directoryNodeId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.directoryNodeId"></a>

```typescript
public readonly directoryNodeId: number;
```

- *Type:* number

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `externalDirectoryNodeId`<sup>Required</sup> <a name="externalDirectoryNodeId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.externalDirectoryNodeId"></a>

```typescript
public readonly externalDirectoryNodeId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference">DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `isEmailRegex`<sup>Required</sup> <a name="isEmailRegex" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.isEmailRegex"></a>

```typescript
public readonly isEmailRegex: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.provenance"></a>

```typescript
public readonly provenance: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `displayNameIdInput`<sup>Optional</sup> <a name="displayNameIdInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameIdInput"></a>

```typescript
public readonly displayNameIdInput: number;
```

- *Type:* number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareEmailSecurityImpersonationRegistryFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `displayNameId`<sup>Required</sup> <a name="displayNameId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.displayNameId"></a>

```typescript
public readonly displayNameId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareEmailSecurityImpersonationRegistryConfig <a name="DataCloudflareEmailSecurityImpersonationRegistryConfig" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailSecurityImpersonationRegistryConfig: dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.accountId">accountId</a></code> | <code>string</code> | Account Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.displayNameId">displayNameId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#account_id DataCloudflareEmailSecurityImpersonationRegistry#account_id}

---

##### `displayNameId`<sup>Optional</sup> <a name="displayNameId" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.displayNameId"></a>

```typescript
public readonly displayNameId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#display_name_id DataCloudflareEmailSecurityImpersonationRegistry#display_name_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareEmailSecurityImpersonationRegistryFilter;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#filter DataCloudflareEmailSecurityImpersonationRegistry#filter}.

---

### DataCloudflareEmailSecurityImpersonationRegistryFilter <a name="DataCloudflareEmailSecurityImpersonationRegistryFilter" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

const dataCloudflareEmailSecurityImpersonationRegistryFilter: dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.direction">direction</a></code> | <code>string</code> | The sorting direction. Available values: "asc", "desc". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.order">order</a></code> | <code>string</code> | The field to sort by. Available values: "name", "email", "created_at". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.provenance">provenance</a></code> | <code>string</code> | Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY". |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.search">search</a></code> | <code>string</code> | Allows searching in multiple properties of a record simultaneously. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The sorting direction. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#direction DataCloudflareEmailSecurityImpersonationRegistry#direction}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

The field to sort by. Available values: "name", "email", "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#order DataCloudflareEmailSecurityImpersonationRegistry#order}

---

##### `provenance`<sup>Optional</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.provenance"></a>

```typescript
public readonly provenance: string;
```

- *Type:* string

Available values: "A1S_INTERNAL", "SNOOPY-CASB_OFFICE_365", "SNOOPY-OFFICE_365", "SNOOPY-GOOGLE_DIRECTORY".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#provenance DataCloudflareEmailSecurityImpersonationRegistry#provenance}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Allows searching in multiple properties of a record simultaneously.

This parameter is intended for human users, not automation. Its exact
behavior is intentionally left unspecified and is subject to change
in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/email_security_impersonation_registry#search DataCloudflareEmailSecurityImpersonationRegistry#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference <a name="DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareEmailSecurityImpersonationRegistry } from '@cdktf/provider-cloudflare'

new dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetProvenance">resetProvenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetProvenance` <a name="resetProvenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetProvenance"></a>

```typescript
public resetProvenance(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenanceInput">provenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenance">provenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `provenanceInput`<sup>Optional</sup> <a name="provenanceInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenanceInput"></a>

```typescript
public readonly provenanceInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `provenance`<sup>Required</sup> <a name="provenance" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.provenance"></a>

```typescript
public readonly provenance: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareEmailSecurityImpersonationRegistryFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.dataCloudflareEmailSecurityImpersonationRegistry.DataCloudflareEmailSecurityImpersonationRegistryFilter">DataCloudflareEmailSecurityImpersonationRegistryFilter</a>

---



