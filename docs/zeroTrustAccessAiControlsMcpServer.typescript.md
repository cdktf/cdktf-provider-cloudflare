# `zeroTrustAccessAiControlsMcpServer` Submodule <a name="`zeroTrustAccessAiControlsMcpServer` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessAiControlsMcpServer <a name="ZeroTrustAccessAiControlsMcpServer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server cloudflare_zero_trust_access_ai_controls_mcp_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer"></a>

```typescript
import { zeroTrustAccessAiControlsMcpServer } from '@cdktf/provider-cloudflare'

new zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer(scope: Construct, id: string, config: ZeroTrustAccessAiControlsMcpServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig">ZeroTrustAccessAiControlsMcpServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig">ZeroTrustAccessAiControlsMcpServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAuthCredentials">resetAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthCredentials` <a name="resetAuthCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetAuthCredentials"></a>

```typescript
public resetAuthCredentials(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct"></a>

```typescript
import { zeroTrustAccessAiControlsMcpServer } from '@cdktf/provider-cloudflare'

zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement"></a>

```typescript
import { zeroTrustAccessAiControlsMcpServer } from '@cdktf/provider-cloudflare'

zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource"></a>

```typescript
import { zeroTrustAccessAiControlsMcpServer } from '@cdktf/provider-cloudflare'

zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport"></a>

```typescript
import { zeroTrustAccessAiControlsMcpServer } from '@cdktf/provider-cloudflare'

zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessAiControlsMcpServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSynced">lastSynced</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedBy">modifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.prompts">prompts</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tools">tools</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentialsInput">authCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentials">authCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `lastSynced`<sup>Required</sup> <a name="lastSynced" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.lastSynced"></a>

```typescript
public readonly lastSynced: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.modifiedBy"></a>

```typescript
public readonly modifiedBy: string;
```

- *Type:* string

---

##### `prompts`<sup>Required</sup> <a name="prompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.prompts"></a>

```typescript
public readonly prompts: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tools"></a>

```typescript
public readonly tools: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `authCredentialsInput`<sup>Optional</sup> <a name="authCredentialsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentialsInput"></a>

```typescript
public readonly authCredentialsInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `authCredentials`<sup>Required</sup> <a name="authCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authCredentials"></a>

```typescript
public readonly authCredentials: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessAiControlsMcpServerConfig <a name="ZeroTrustAccessAiControlsMcpServerConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.Initializer"></a>

```typescript
import { zeroTrustAccessAiControlsMcpServer } from '@cdktf/provider-cloudflare'

const zeroTrustAccessAiControlsMcpServerConfig: zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authType">authType</a></code> | <code>string</code> | Available values: "oauth", "bearer", "unauthenticated". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.id">id</a></code> | <code>string</code> | server id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authCredentials">authCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#account_id ZeroTrustAccessAiControlsMcpServer#account_id}.

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Available values: "oauth", "bearer", "unauthenticated".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_type ZeroTrustAccessAiControlsMcpServer#auth_type}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#hostname ZeroTrustAccessAiControlsMcpServer#hostname}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#id ZeroTrustAccessAiControlsMcpServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#name ZeroTrustAccessAiControlsMcpServer#name}.

---

##### `authCredentials`<sup>Optional</sup> <a name="authCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.authCredentials"></a>

```typescript
public readonly authCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#auth_credentials ZeroTrustAccessAiControlsMcpServer#auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpServer.ZeroTrustAccessAiControlsMcpServerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_ai_controls_mcp_server#description ZeroTrustAccessAiControlsMcpServer#description}.

---



