# `cloudflare_certificate_pack`

Refer to the Terraform Registory for docs: [`cloudflare_certificate_pack`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack).

# `certificatePack` Submodule <a name="`certificatePack` Submodule" id="@cdktf/provider-cloudflare.certificatePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatePack <a name="CertificatePack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack cloudflare_certificate_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

new certificatePack.CertificatePack(scope: Construct, id: string, config: CertificatePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig">CertificatePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig">CertificatePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationErrors">putValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationRecords">putValidationRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetCloudflareBranding">resetCloudflareBranding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationErrors">resetValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationRecords">resetValidationRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetWaitForActiveStatus">resetWaitForActiveStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putValidationErrors` <a name="putValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationErrors"></a>

```typescript
public putValidationErrors(value: IResolvable | CertificatePackValidationErrors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationErrors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]

---

##### `putValidationRecords` <a name="putValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationRecords"></a>

```typescript
public putValidationRecords(value: IResolvable | CertificatePackValidationRecords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.putValidationRecords.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]

---

##### `resetCloudflareBranding` <a name="resetCloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetCloudflareBranding"></a>

```typescript
public resetCloudflareBranding(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetValidationErrors` <a name="resetValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationErrors"></a>

```typescript
public resetValidationErrors(): void
```

##### `resetValidationRecords` <a name="resetValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetValidationRecords"></a>

```typescript
public resetValidationRecords(): void
```

##### `resetWaitForActiveStatus` <a name="resetWaitForActiveStatus" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetWaitForActiveStatus"></a>

```typescript
public resetWaitForActiveStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isConstruct"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

certificatePack.CertificatePack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformElement"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

certificatePack.CertificatePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformResource"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

certificatePack.CertificatePack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.generateConfigForImport"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

certificatePack.CertificatePack.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CertificatePack resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CertificatePack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CertificatePack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificatePack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrors">validationErrors</a></code> | <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList">CertificatePackValidationErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecords">validationRecords</a></code> | <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList">CertificatePackValidationRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBrandingInput">cloudflareBrandingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrorsInput">validationErrorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethodInput">validationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecordsInput">validationRecordsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDaysInput">validityDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatusInput">waitForActiveStatusInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBranding">cloudflareBranding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethod">validationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDays">validityDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatus">waitForActiveStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `validationErrors`<sup>Required</sup> <a name="validationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrors"></a>

```typescript
public readonly validationErrors: CertificatePackValidationErrorsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList">CertificatePackValidationErrorsList</a>

---

##### `validationRecords`<sup>Required</sup> <a name="validationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecords"></a>

```typescript
public readonly validationRecords: CertificatePackValidationRecordsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList">CertificatePackValidationRecordsList</a>

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthorityInput"></a>

```typescript
public readonly certificateAuthorityInput: string;
```

- *Type:* string

---

##### `cloudflareBrandingInput`<sup>Optional</sup> <a name="cloudflareBrandingInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBrandingInput"></a>

```typescript
public readonly cloudflareBrandingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hostsInput"></a>

```typescript
public readonly hostsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validationErrorsInput`<sup>Optional</sup> <a name="validationErrorsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationErrorsInput"></a>

```typescript
public readonly validationErrorsInput: IResolvable | CertificatePackValidationErrors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]

---

##### `validationMethodInput`<sup>Optional</sup> <a name="validationMethodInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethodInput"></a>

```typescript
public readonly validationMethodInput: string;
```

- *Type:* string

---

##### `validationRecordsInput`<sup>Optional</sup> <a name="validationRecordsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationRecordsInput"></a>

```typescript
public readonly validationRecordsInput: IResolvable | CertificatePackValidationRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]

---

##### `validityDaysInput`<sup>Optional</sup> <a name="validityDaysInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDaysInput"></a>

```typescript
public readonly validityDaysInput: number;
```

- *Type:* number

---

##### `waitForActiveStatusInput`<sup>Optional</sup> <a name="waitForActiveStatusInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatusInput"></a>

```typescript
public readonly waitForActiveStatusInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

---

##### `cloudflareBranding`<sup>Required</sup> <a name="cloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBranding"></a>

```typescript
public readonly cloudflareBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

---

##### `validityDays`<sup>Required</sup> <a name="validityDays" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDays"></a>

```typescript
public readonly validityDays: number;
```

- *Type:* number

---

##### `waitForActiveStatus`<sup>Required</sup> <a name="waitForActiveStatus" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.waitForActiveStatus"></a>

```typescript
public readonly waitForActiveStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CertificatePackConfig <a name="CertificatePackConfig" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

const certificatePackConfig: certificatePack.CertificatePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | Which certificate authority to issue the certificate pack. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.hosts">hosts</a></code> | <code>string[]</code> | List of hostnames to provision the certificate pack for. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.type">type</a></code> | <code>string</code> | Certificate pack configuration type. Available values: `advanced`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationMethod">validationMethod</a></code> | <code>string</code> | Which validation method to use in order to prove domain ownership. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validityDays">validityDays</a></code> | <code>number</code> | How long the certificate is valid for. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.cloudflareBranding">cloudflareBranding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to include Cloudflare branding. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#id CertificatePack#id}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationErrors">validationErrors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]</code> | validation_errors block. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationRecords">validationRecords</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]</code> | validation_records block. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.waitForActiveStatus">waitForActiveStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to wait for a certificate pack to reach status `active` during creation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.certificateAuthority"></a>

```typescript
public readonly certificateAuthority: string;
```

- *Type:* string

Which certificate authority to issue the certificate pack.

Available values: `digicert`, `lets_encrypt`, `google`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#certificate_authority CertificatePack#certificate_authority}

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

List of hostnames to provision the certificate pack for.

The zone name must be included as a host. Note: If using Let's Encrypt, you cannot use individual subdomains and only a wildcard for subdomain is available. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#hosts CertificatePack#hosts}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Certificate pack configuration type. Available values: `advanced`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#type CertificatePack#type}

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

Which validation method to use in order to prove domain ownership.

Available values: `txt`, `http`, `email`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#validation_method CertificatePack#validation_method}

---

##### `validityDays`<sup>Required</sup> <a name="validityDays" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validityDays"></a>

```typescript
public readonly validityDays: number;
```

- *Type:* number

How long the certificate is valid for.

Note: If using Let's Encrypt, this value can only be 90 days. Available values: `14`, `30`, `90`, `365`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#validity_days CertificatePack#validity_days}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#zone_id CertificatePack#zone_id}

---

##### `cloudflareBranding`<sup>Optional</sup> <a name="cloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.cloudflareBranding"></a>

```typescript
public readonly cloudflareBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to include Cloudflare branding.

This will add `sni.cloudflaressl.com` as the Common Name if set to `true`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#id CertificatePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `validationErrors`<sup>Optional</sup> <a name="validationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationErrors"></a>

```typescript
public readonly validationErrors: IResolvable | CertificatePackValidationErrors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]

validation_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#validation_errors CertificatePack#validation_errors}

---

##### `validationRecords`<sup>Optional</sup> <a name="validationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationRecords"></a>

```typescript
public readonly validationRecords: IResolvable | CertificatePackValidationRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]

validation_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#validation_records CertificatePack#validation_records}

---

##### `waitForActiveStatus`<sup>Optional</sup> <a name="waitForActiveStatus" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.waitForActiveStatus"></a>

```typescript
public readonly waitForActiveStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to wait for a certificate pack to reach status `active` during creation.

Defaults to `false`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#wait_for_active_status CertificatePack#wait_for_active_status}

---

### CertificatePackValidationErrors <a name="CertificatePackValidationErrors" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

const certificatePackValidationErrors: certificatePack.CertificatePackValidationErrors = { ... }
```


### CertificatePackValidationRecords <a name="CertificatePackValidationRecords" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

const certificatePackValidationRecords: certificatePack.CertificatePackValidationRecords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameName">cnameName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#cname_name CertificatePack#cname_name}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameTarget">cnameTarget</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#cname_target CertificatePack#cname_target}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.emails">emails</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#emails CertificatePack#emails}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpBody">httpBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#http_body CertificatePack#http_body}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpUrl">httpUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#http_url CertificatePack#http_url}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtName">txtName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#txt_name CertificatePack#txt_name}. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtValue">txtValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#txt_value CertificatePack#txt_value}. |

---

##### `cnameName`<sup>Optional</sup> <a name="cnameName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameName"></a>

```typescript
public readonly cnameName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#cname_name CertificatePack#cname_name}.

---

##### `cnameTarget`<sup>Optional</sup> <a name="cnameTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.cnameTarget"></a>

```typescript
public readonly cnameTarget: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#cname_target CertificatePack#cname_target}.

---

##### `emails`<sup>Optional</sup> <a name="emails" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#emails CertificatePack#emails}.

---

##### `httpBody`<sup>Optional</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#http_body CertificatePack#http_body}.

---

##### `httpUrl`<sup>Optional</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#http_url CertificatePack#http_url}.

---

##### `txtName`<sup>Optional</sup> <a name="txtName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtName"></a>

```typescript
public readonly txtName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#txt_name CertificatePack#txt_name}.

---

##### `txtValue`<sup>Optional</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords.property.txtValue"></a>

```typescript
public readonly txtValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.16.0/docs/resources/certificate_pack#txt_value CertificatePack#txt_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificatePackValidationErrorsList <a name="CertificatePackValidationErrorsList" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

new certificatePack.CertificatePackValidationErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.get"></a>

```typescript
public get(index: number): CertificatePackValidationErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatePackValidationErrors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>[]

---


### CertificatePackValidationErrorsOutputReference <a name="CertificatePackValidationErrorsOutputReference" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

new certificatePack.CertificatePackValidationErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatePackValidationErrors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationErrors">CertificatePackValidationErrors</a>

---


### CertificatePackValidationRecordsList <a name="CertificatePackValidationRecordsList" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

new certificatePack.CertificatePackValidationRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.get"></a>

```typescript
public get(index: number): CertificatePackValidationRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatePackValidationRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>[]

---


### CertificatePackValidationRecordsOutputReference <a name="CertificatePackValidationRecordsOutputReference" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer"></a>

```typescript
import { certificatePack } from '@cdktf/provider-cloudflare'

new certificatePack.CertificatePackValidationRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameName">resetCnameName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameTarget">resetCnameTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetEmails">resetEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpBody">resetHttpBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpUrl">resetHttpUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtName">resetTxtName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtValue">resetTxtValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCnameName` <a name="resetCnameName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameName"></a>

```typescript
public resetCnameName(): void
```

##### `resetCnameTarget` <a name="resetCnameTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetCnameTarget"></a>

```typescript
public resetCnameTarget(): void
```

##### `resetEmails` <a name="resetEmails" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetEmails"></a>

```typescript
public resetEmails(): void
```

##### `resetHttpBody` <a name="resetHttpBody" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpBody"></a>

```typescript
public resetHttpBody(): void
```

##### `resetHttpUrl` <a name="resetHttpUrl" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetHttpUrl"></a>

```typescript
public resetHttpUrl(): void
```

##### `resetTxtName` <a name="resetTxtName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtName"></a>

```typescript
public resetTxtName(): void
```

##### `resetTxtValue` <a name="resetTxtValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.resetTxtValue"></a>

```typescript
public resetTxtValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameNameInput">cnameNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTargetInput">cnameTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emailsInput">emailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBodyInput">httpBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrlInput">httpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtNameInput">txtNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValueInput">txtValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameName">cnameName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTarget">cnameTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emails">emails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBody">httpBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrl">httpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtName">txtName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValue">txtValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cnameNameInput`<sup>Optional</sup> <a name="cnameNameInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameNameInput"></a>

```typescript
public readonly cnameNameInput: string;
```

- *Type:* string

---

##### `cnameTargetInput`<sup>Optional</sup> <a name="cnameTargetInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTargetInput"></a>

```typescript
public readonly cnameTargetInput: string;
```

- *Type:* string

---

##### `emailsInput`<sup>Optional</sup> <a name="emailsInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emailsInput"></a>

```typescript
public readonly emailsInput: string[];
```

- *Type:* string[]

---

##### `httpBodyInput`<sup>Optional</sup> <a name="httpBodyInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBodyInput"></a>

```typescript
public readonly httpBodyInput: string;
```

- *Type:* string

---

##### `httpUrlInput`<sup>Optional</sup> <a name="httpUrlInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrlInput"></a>

```typescript
public readonly httpUrlInput: string;
```

- *Type:* string

---

##### `txtNameInput`<sup>Optional</sup> <a name="txtNameInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtNameInput"></a>

```typescript
public readonly txtNameInput: string;
```

- *Type:* string

---

##### `txtValueInput`<sup>Optional</sup> <a name="txtValueInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValueInput"></a>

```typescript
public readonly txtValueInput: string;
```

- *Type:* string

---

##### `cnameName`<sup>Required</sup> <a name="cnameName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameName"></a>

```typescript
public readonly cnameName: string;
```

- *Type:* string

---

##### `cnameTarget`<sup>Required</sup> <a name="cnameTarget" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.cnameTarget"></a>

```typescript
public readonly cnameTarget: string;
```

- *Type:* string

---

##### `emails`<sup>Required</sup> <a name="emails" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.emails"></a>

```typescript
public readonly emails: string[];
```

- *Type:* string[]

---

##### `httpBody`<sup>Required</sup> <a name="httpBody" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpBody"></a>

```typescript
public readonly httpBody: string;
```

- *Type:* string

---

##### `httpUrl`<sup>Required</sup> <a name="httpUrl" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.httpUrl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* string

---

##### `txtName`<sup>Required</sup> <a name="txtName" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtName"></a>

```typescript
public readonly txtName: string;
```

- *Type:* string

---

##### `txtValue`<sup>Required</sup> <a name="txtValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.txtValue"></a>

```typescript
public readonly txtValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CertificatePackValidationRecords;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackValidationRecords">CertificatePackValidationRecords</a>

---



