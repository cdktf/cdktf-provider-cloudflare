# `zeroTrustGatewayLogging` Submodule <a name="`zeroTrustGatewayLogging` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewayLogging <a name="ZeroTrustGatewayLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging cloudflare_zero_trust_gateway_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

new zeroTrustGatewayLogging.ZeroTrustGatewayLogging(scope: Construct, id: string, config: ZeroTrustGatewayLoggingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig">ZeroTrustGatewayLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig">ZeroTrustGatewayLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.putSettingsByRuleType">putSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetRedactPii">resetRedactPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetSettingsByRuleType">resetSettingsByRuleType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettingsByRuleType` <a name="putSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.putSettingsByRuleType"></a>

```typescript
public putSettingsByRuleType(value: ZeroTrustGatewayLoggingSettingsByRuleType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a>

---

##### `resetRedactPii` <a name="resetRedactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetRedactPii"></a>

```typescript
public resetRedactPii(): void
```

##### `resetSettingsByRuleType` <a name="resetSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.resetSettingsByRuleType"></a>

```typescript
public resetSettingsByRuleType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ZeroTrustGatewayLogging resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustGatewayLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustGatewayLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewayLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleType">settingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPiiInput">redactPiiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleTypeInput">settingsByRuleTypeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPii">redactPii</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `settingsByRuleType`<sup>Required</sup> <a name="settingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleType"></a>

```typescript
public readonly settingsByRuleType: ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `redactPiiInput`<sup>Optional</sup> <a name="redactPiiInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPiiInput"></a>

```typescript
public readonly redactPiiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `settingsByRuleTypeInput`<sup>Optional</sup> <a name="settingsByRuleTypeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.settingsByRuleTypeInput"></a>

```typescript
public readonly settingsByRuleTypeInput: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleType;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `redactPii`<sup>Required</sup> <a name="redactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.redactPii"></a>

```typescript
public readonly redactPii: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLogging.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewayLoggingConfig <a name="ZeroTrustGatewayLoggingConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

const zeroTrustGatewayLoggingConfig: zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.redactPii">redactPii</a></code> | <code>boolean \| cdktf.IResolvable</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.settingsByRuleType">settingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a></code> | Logging settings by rule type. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#account_id ZeroTrustGatewayLogging#account_id}.

---

##### `redactPii`<sup>Optional</sup> <a name="redactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.redactPii"></a>

```typescript
public readonly redactPii: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#redact_pii ZeroTrustGatewayLogging#redact_pii}

---

##### `settingsByRuleType`<sup>Optional</sup> <a name="settingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingConfig.property.settingsByRuleType"></a>

```typescript
public readonly settingsByRuleType: ZeroTrustGatewayLoggingSettingsByRuleType;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a>

Logging settings by rule type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#settings_by_rule_type ZeroTrustGatewayLogging#settings_by_rule_type}

---

### ZeroTrustGatewayLoggingSettingsByRuleType <a name="ZeroTrustGatewayLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

const zeroTrustGatewayLoggingSettingsByRuleType: zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#dns ZeroTrustGatewayLogging#dns}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#http ZeroTrustGatewayLogging#http}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#l4 ZeroTrustGatewayLogging#l4}. |

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.dns"></a>

```typescript
public readonly dns: ZeroTrustGatewayLoggingSettingsByRuleTypeDns;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#dns ZeroTrustGatewayLogging#dns}.

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.http"></a>

```typescript
public readonly http: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#http ZeroTrustGatewayLogging#http}.

---

##### `l4`<sup>Optional</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType.property.l4"></a>

```typescript
public readonly l4: ZeroTrustGatewayLoggingSettingsByRuleTypeL4;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#l4 ZeroTrustGatewayLogging#l4}.

---

### ZeroTrustGatewayLoggingSettingsByRuleTypeDns <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

const zeroTrustGatewayLoggingSettingsByRuleTypeDns: zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log all requests to this service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log only blocking requests to this service. |

---

##### `logAll`<sup>Optional</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log all requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}

---

##### `logBlocks`<sup>Optional</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log only blocking requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}

---

### ZeroTrustGatewayLoggingSettingsByRuleTypeHttp <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

const zeroTrustGatewayLoggingSettingsByRuleTypeHttp: zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log all requests to this service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log only blocking requests to this service. |

---

##### `logAll`<sup>Optional</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log all requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}

---

##### `logBlocks`<sup>Optional</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log only blocking requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}

---

### ZeroTrustGatewayLoggingSettingsByRuleTypeL4 <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

const zeroTrustGatewayLoggingSettingsByRuleTypeL4: zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log all requests to this service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log only blocking requests to this service. |

---

##### `logAll`<sup>Optional</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log all requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#log_all ZeroTrustGatewayLogging#log_all}

---

##### `logBlocks`<sup>Optional</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log only blocking requests to this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.6.0/docs/resources/zero_trust_gateway_logging#log_blocks ZeroTrustGatewayLogging#log_blocks}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

new zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogAll">resetLogAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogBlocks">resetLogBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogAll` <a name="resetLogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogAll"></a>

```typescript
public resetLogAll(): void
```

##### `resetLogBlocks` <a name="resetLogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.resetLogBlocks"></a>

```typescript
public resetLogBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">logAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">logBlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAllInput`<sup>Optional</sup> <a name="logAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```typescript
public readonly logAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocksInput`<sup>Optional</sup> <a name="logBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```typescript
public readonly logBlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleTypeDns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a>

---


### ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

new zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogAll">resetLogAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogBlocks">resetLogBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogAll` <a name="resetLogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogAll"></a>

```typescript
public resetLogAll(): void
```

##### `resetLogBlocks` <a name="resetLogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.resetLogBlocks"></a>

```typescript
public resetLogBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">logAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">logBlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAllInput`<sup>Optional</sup> <a name="logAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```typescript
public readonly logAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocksInput`<sup>Optional</sup> <a name="logBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```typescript
public readonly logBlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleTypeHttp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a>

---


### ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

new zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogAll">resetLogAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogBlocks">resetLogBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogAll` <a name="resetLogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogAll"></a>

```typescript
public resetLogAll(): void
```

##### `resetLogBlocks` <a name="resetLogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.resetLogBlocks"></a>

```typescript
public resetLogBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">logAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">logBlocksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAll">logAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">logBlocks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logAllInput`<sup>Optional</sup> <a name="logAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```typescript
public readonly logAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocksInput`<sup>Optional</sup> <a name="logBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```typescript
public readonly logBlocksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logAll`<sup>Required</sup> <a name="logAll" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```typescript
public readonly logAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `logBlocks`<sup>Required</sup> <a name="logBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```typescript
public readonly logBlocks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleTypeL4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a>

---


### ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference <a name="ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```typescript
import { zeroTrustGatewayLogging } from '@cdktf/provider-cloudflare'

new zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putDns">putDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putL4">putL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetHttp">resetHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetL4">resetL4</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDns` <a name="putDns" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```typescript
public putDns(value: ZeroTrustGatewayLoggingSettingsByRuleTypeDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a>

---

##### `putHttp` <a name="putHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```typescript
public putHttp(value: ZeroTrustGatewayLoggingSettingsByRuleTypeHttp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a>

---

##### `putL4` <a name="putL4" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```typescript
public putL4(value: ZeroTrustGatewayLoggingSettingsByRuleTypeL4): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a>

---

##### `resetDns` <a name="resetDns" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetHttp` <a name="resetHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetHttp"></a>

```typescript
public resetHttp(): void
```

##### `resetL4` <a name="resetL4" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.resetL4"></a>

```typescript
public resetL4(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4">l4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dnsInput">dnsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.httpInput">httpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4Input">l4Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```typescript
public readonly dns: ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```typescript
public readonly http: ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `l4`<sup>Required</sup> <a name="l4" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```typescript
public readonly l4: ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference;
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewayLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```typescript
public readonly dnsInput: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleTypeDns;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeDns">ZeroTrustGatewayLoggingSettingsByRuleTypeDns</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```typescript
public readonly httpInput: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleTypeHttp;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeHttp">ZeroTrustGatewayLoggingSettingsByRuleTypeHttp</a>

---

##### `l4Input`<sup>Optional</sup> <a name="l4Input" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```typescript
public readonly l4Input: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleTypeL4;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeL4">ZeroTrustGatewayLoggingSettingsByRuleTypeL4</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ZeroTrustGatewayLoggingSettingsByRuleType;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-cloudflare.zeroTrustGatewayLogging.ZeroTrustGatewayLoggingSettingsByRuleType">ZeroTrustGatewayLoggingSettingsByRuleType</a>

---



