# `accessMutualTlsHostnameSettings` Submodule <a name="`accessMutualTlsHostnameSettings` Submodule" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessMutualTlsHostnameSettings <a name="AccessMutualTlsHostnameSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings cloudflare_access_mutual_tls_hostname_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

new accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings(scope: Construct, id: string, config?: AccessMutualTlsHostnameSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig">AccessMutualTlsHostnameSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig">AccessMutualTlsHostnameSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.putSettings"></a>

```typescript
public putSettings(value: IResolvable | AccessMutualTlsHostnameSettingsSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.putSettings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessMutualTlsHostnameSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessMutualTlsHostnameSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessMutualTlsHostnameSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessMutualTlsHostnameSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessMutualTlsHostnameSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList">AccessMutualTlsHostnameSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settingsInput">settingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settings"></a>

```typescript
public readonly settings: AccessMutualTlsHostnameSettingsSettingsList;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList">AccessMutualTlsHostnameSettingsSettingsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | AccessMutualTlsHostnameSettingsSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessMutualTlsHostnameSettingsConfig <a name="AccessMutualTlsHostnameSettingsConfig" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.Initializer"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

const accessMutualTlsHostnameSettingsConfig: accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.settings">settings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]</code> | settings block. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#account_id AccessMutualTlsHostnameSettings#account_id}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.settings"></a>

```typescript
public readonly settings: IResolvable | AccessMutualTlsHostnameSettingsSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#settings AccessMutualTlsHostnameSettings#settings}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#zone_id AccessMutualTlsHostnameSettings#zone_id}

---

### AccessMutualTlsHostnameSettingsSettings <a name="AccessMutualTlsHostnameSettingsSettings" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.Initializer"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

const accessMutualTlsHostnameSettingsSettings: accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.hostname">hostname</a></code> | <code>string</code> | The hostname that these settings apply to. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.chinaNetwork">chinaNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Request client certificates for this hostname in China. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.clientCertificateForwarding">clientCertificateForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname that these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#hostname AccessMutualTlsHostnameSettings#hostname}

---

##### `chinaNetwork`<sup>Optional</sup> <a name="chinaNetwork" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.chinaNetwork"></a>

```typescript
public readonly chinaNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Request client certificates for this hostname in China.

Can only be set to true if this zone is china network enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#china_network AccessMutualTlsHostnameSettings#china_network}

---

##### `clientCertificateForwarding`<sup>Optional</sup> <a name="clientCertificateForwarding" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings.property.clientCertificateForwarding"></a>

```typescript
public readonly clientCertificateForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.29.0/docs/resources/access_mutual_tls_hostname_settings#client_certificate_forwarding AccessMutualTlsHostnameSettings#client_certificate_forwarding}

---

## Classes <a name="Classes" id="Classes"></a>

### AccessMutualTlsHostnameSettingsSettingsList <a name="AccessMutualTlsHostnameSettingsSettingsList" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

new accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.get"></a>

```typescript
public get(index: number): AccessMutualTlsHostnameSettingsSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessMutualTlsHostnameSettingsSettings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>[]

---


### AccessMutualTlsHostnameSettingsSettingsOutputReference <a name="AccessMutualTlsHostnameSettingsSettingsOutputReference" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer"></a>

```typescript
import { accessMutualTlsHostnameSettings } from '@cdktf/provider-cloudflare'

new accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetChinaNetwork">resetChinaNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetClientCertificateForwarding">resetClientCertificateForwarding</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChinaNetwork` <a name="resetChinaNetwork" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetChinaNetwork"></a>

```typescript
public resetChinaNetwork(): void
```

##### `resetClientCertificateForwarding` <a name="resetClientCertificateForwarding" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.resetClientCertificateForwarding"></a>

```typescript
public resetClientCertificateForwarding(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput">chinaNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput">clientCertificateForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetwork">chinaNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding">clientCertificateForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chinaNetworkInput`<sup>Optional</sup> <a name="chinaNetworkInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput"></a>

```typescript
public readonly chinaNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateForwardingInput`<sup>Optional</sup> <a name="clientCertificateForwardingInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput"></a>

```typescript
public readonly clientCertificateForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `chinaNetwork`<sup>Required</sup> <a name="chinaNetwork" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.chinaNetwork"></a>

```typescript
public readonly chinaNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientCertificateForwarding`<sup>Required</sup> <a name="clientCertificateForwarding" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding"></a>

```typescript
public readonly clientCertificateForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccessMutualTlsHostnameSettingsSettings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.accessMutualTlsHostnameSettings.AccessMutualTlsHostnameSettingsSettings">AccessMutualTlsHostnameSettingsSettings</a>

---



