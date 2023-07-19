# `cloudflare_turnstile_widget`

Refer to the Terraform Registory for docs: [`cloudflare_turnstile_widget`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget).

# `turnstileWidget` Submodule <a name="`turnstileWidget` Submodule" id="@cdktf/provider-cloudflare.turnstileWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TurnstileWidget <a name="TurnstileWidget" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

new turnstileWidget.TurnstileWidget(scope: Construct, id: string, config: TurnstileWidgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig">TurnstileWidgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig">TurnstileWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode">resetBotFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel">resetOfflabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBotFightMode` <a name="resetBotFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetBotFightMode"></a>

```typescript
public resetBotFightMode(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOfflabel` <a name="resetOfflabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetOfflabel"></a>

```typescript
public resetOfflabel(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

turnstileWidget.TurnstileWidget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput">botFightModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput">offlabelInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode">botFightMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel">offlabel</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `botFightModeInput`<sup>Optional</sup> <a name="botFightModeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightModeInput"></a>

```typescript
public readonly botFightModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `offlabelInput`<sup>Optional</sup> <a name="offlabelInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabelInput"></a>

```typescript
public readonly offlabelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `botFightMode`<sup>Required</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.botFightMode"></a>

```typescript
public readonly botFightMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offlabel`<sup>Required</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.offlabel"></a>

```typescript
public readonly offlabel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TurnstileWidgetConfig <a name="TurnstileWidgetConfig" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.Initializer"></a>

```typescript
import { turnstileWidget } from '@cdktf/provider-cloudflare'

const turnstileWidgetConfig: turnstileWidget.TurnstileWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId">accountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains">domains</a></code> | <code>string[]</code> | Domains where the widget is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode">mode</a></code> | <code>string</code> | Widget Mode. Available values: `non-interactive`, `invisible`, `managed`. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name">name</a></code> | <code>string</code> | Human readable widget name. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode">botFightMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id">id</a></code> | <code>string</code> | The identifier of this resource. This is the site key value. |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel">offlabel</a></code> | <code>boolean \| cdktf.IResolvable</code> | Do not show any Cloudflare branding on the widget (Enterprise only). |
| <code><a href="#@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region">region</a></code> | <code>string</code> | Region where this widget can be used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

Domains where the widget is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Widget Mode. Available values: `non-interactive`, `invisible`, `managed`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human readable widget name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#name TurnstileWidget#name}

---

##### `botFightMode`<sup>Optional</sup> <a name="botFightMode" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.botFightMode"></a>

```typescript
public readonly botFightMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If bot_fight_mode is set to true, Cloudflare issues computationally expensive challenges in response to malicious bots (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier of this resource. This is the site key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#id TurnstileWidget#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `offlabel`<sup>Optional</sup> <a name="offlabel" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.offlabel"></a>

```typescript
public readonly offlabel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Do not show any Cloudflare branding on the widget (Enterprise only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-cloudflare.turnstileWidget.TurnstileWidgetConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this widget can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.10.0/docs/resources/turnstile_widget#region TurnstileWidget#region}

---



