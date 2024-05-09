# `hostnameTlsSettingCiphers` Submodule <a name="`hostnameTlsSettingCiphers` Submodule" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HostnameTlsSettingCiphers <a name="HostnameTlsSettingCiphers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers cloudflare_hostname_tls_setting_ciphers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer"></a>

```typescript
import { hostnameTlsSettingCiphers } from '@cdktf/provider-cloudflare'

new hostnameTlsSettingCiphers.HostnameTlsSettingCiphers(scope: Construct, id: string, config: HostnameTlsSettingCiphersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig">HostnameTlsSettingCiphersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig">HostnameTlsSettingCiphersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.resetPorts"></a>

```typescript
public resetPorts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HostnameTlsSettingCiphers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct"></a>

```typescript
import { hostnameTlsSettingCiphers } from '@cdktf/provider-cloudflare'

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement"></a>

```typescript
import { hostnameTlsSettingCiphers } from '@cdktf/provider-cloudflare'

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource"></a>

```typescript
import { hostnameTlsSettingCiphers } from '@cdktf/provider-cloudflare'

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport"></a>

```typescript
import { hostnameTlsSettingCiphers } from '@cdktf/provider-cloudflare'

hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HostnameTlsSettingCiphers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HostnameTlsSettingCiphers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HostnameTlsSettingCiphers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HostnameTlsSettingCiphers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput">portsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.portsInput"></a>

```typescript
public readonly portsInput: number[];
```

- *Type:* number[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HostnameTlsSettingCiphersConfig <a name="HostnameTlsSettingCiphersConfig" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.Initializer"></a>

```typescript
import { hostnameTlsSettingCiphers } from '@cdktf/provider-cloudflare'

const hostnameTlsSettingCiphersConfig: hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname">hostname</a></code> | <code>string</code> | Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value">value</a></code> | <code>string[]</code> | Ciphers suites value. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}. |
| <code><a href="#@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports">ports</a></code> | <code>number[]</code> | Ports to use within the IP rule. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname that belongs to this zone name. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#hostname HostnameTlsSettingCiphers#hostname}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Ciphers suites value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#value HostnameTlsSettingCiphers#value}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#zone_id HostnameTlsSettingCiphers#zone_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#id HostnameTlsSettingCiphers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-cloudflare.hostnameTlsSettingCiphers.HostnameTlsSettingCiphersConfig.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

Ports to use within the IP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.32.0/docs/resources/hostname_tls_setting_ciphers#ports HostnameTlsSettingCiphers#ports}

---



