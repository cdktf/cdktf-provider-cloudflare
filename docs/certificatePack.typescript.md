# `certificatePack` Submodule <a name="`certificatePack` Submodule" id="@cdktf/provider-cloudflare.certificatePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificatePack <a name="CertificatePack" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack cloudflare_certificate_pack}.

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
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.toHclTerraform">toHclTerraform</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetCloudflareBranding">resetCloudflareBranding</a></code> | *No description.* |

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

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

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

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

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

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

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

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCloudflareBranding` <a name="resetCloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.resetCloudflareBranding"></a>

```typescript
public resetCloudflareBranding(): void
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBrandingInput">cloudflareBrandingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hostsInput">hostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethodInput">validationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDaysInput">validityDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.cloudflareBranding">cloudflareBranding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethod">validationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDays">validityDays</a></code> | <code>number</code> | *No description.* |
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

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

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

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validationMethodInput`<sup>Optional</sup> <a name="validationMethodInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validationMethodInput"></a>

```typescript
public readonly validationMethodInput: string;
```

- *Type:* string

---

##### `validityDaysInput`<sup>Optional</sup> <a name="validityDaysInput" id="@cdktf/provider-cloudflare.certificatePack.CertificatePack.property.validityDaysInput"></a>

```typescript
public readonly validityDaysInput: number;
```

- *Type:* number

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
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.certificateAuthority">certificateAuthority</a></code> | <code>string</code> | Certificate Authority selected for the order. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.hosts">hosts</a></code> | <code>string[]</code> | Comma separated list of valid host names for the certificate packs. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.type">type</a></code> | <code>string</code> | Type of certificate pack. Available values: "advanced". |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationMethod">validationMethod</a></code> | <code>string</code> | Validation Method selected for the order. Available values: "txt", "http", "email". |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validityDays">validityDays</a></code> | <code>number</code> | Validity Days selected for the order. Available values: 14, 30, 90, 365. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.cloudflareBranding">cloudflareBranding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether or not to add Cloudflare Branding for the order. |

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

Certificate Authority selected for the order.

For information on any certificate authority specific details or restrictions [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
Available values: "google", "lets_encrypt", "ssl_com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#certificate_authority CertificatePack#certificate_authority}

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

Comma separated list of valid host names for the certificate packs.

Must contain the zone apex, may not contain more than 50 hosts, and may not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#hosts CertificatePack#hosts}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of certificate pack. Available values: "advanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#type CertificatePack#type}

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

Validation Method selected for the order. Available values: "txt", "http", "email".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#validation_method CertificatePack#validation_method}

---

##### `validityDays`<sup>Required</sup> <a name="validityDays" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.validityDays"></a>

```typescript
public readonly validityDays: number;
```

- *Type:* number

Validity Days selected for the order. Available values: 14, 30, 90, 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#validity_days CertificatePack#validity_days}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#zone_id CertificatePack#zone_id}

---

##### `cloudflareBranding`<sup>Optional</sup> <a name="cloudflareBranding" id="@cdktf/provider-cloudflare.certificatePack.CertificatePackConfig.property.cloudflareBranding"></a>

```typescript
public readonly cloudflareBranding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether or not to add Cloudflare Branding for the order.

This will add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/certificate_pack#cloudflare_branding CertificatePack#cloudflare_branding}

---



